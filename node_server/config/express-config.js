const express = require('express');
const glob = require('glob');
const logger = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path')

module.exports = function (app, config) {
    //set the app default environment if nothing provided.
    const env = process.env.NODE_ENV || 'development';

    if (env == 'development') {
        //development only.
        // set json space for better readability
        app.set('json spaces', 2);
        // use detailed logger.
        app.use(logger('dev'));
    } else {
        app.use(logger('tiny'));
    }

    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    if (env === 'production') {
        //compress /gzip the response for better performance
        app.use(compress());
    }
    //static file serving for front-end
    // css,javascript, angular etc
    app.use(express.static(config.root + '/public'));
    //use method override for old clients that PUT/PACTH/DELETE not uspported
    app.use(methodOverride());

    //register all routes/controllers
    //prefix => /api
    const controllers = glob.sync(config.root + '/controllers/*.js');
    controllers.forEach(function (controller) {
        require(controller)(app);
    });
    //

    //if we arrive this point, that mean request not handeld with any controller
    //so its a NOT_FOUND-404
    app.use('/api/*', function (req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // response with angular app if it is not a api request.
    app.use('*', (req, res, next) => {
        res.sendFile(path.join(config.root + '/public/index.html'));
    });

    //un-handled error debugging for development [More details]
    if (app.get('env') === 'development') {

        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.json({
                'error': {
                    message: err.message,
                    error: err,
                    title: 'error'
                }
            });
        });
    }

    //unhandled error handling for production
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);

        res.json({
            'error': {
                message: err.message,
                error: {},
                title: 'error'
            }
        });
    });

    return app;
};
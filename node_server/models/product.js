
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const ProductSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
        },
        imgUrl : {
            type: String,
        },
        price: { type: Number, default: 0.00 },
        category: { type: ObjectId, ref: 'Category' },
        //teachers: [{ type: ObjectId, ref: 'User' }],
        active: { type: Boolean, default: true },
        deletedAt: { type: Date, default: null }
    },
    { timestamps: true }
);

ProductSchema.index({ name: 'text' })



module.exports = mongoose.model('Product', ProductSchema);
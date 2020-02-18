export interface IUser {
  name?:string,
  email?:string,
  id?:string
}

export interface IProduct {
  name:string,
  price:number,
  category:{name:string , id:string},
  isActive:boolean,
  _id:string
}

export interface IGetResponse<T> {
  data?:Array<T>
  skip?:number,
  limit?:number
}

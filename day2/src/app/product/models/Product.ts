export interface IGetResponse<T> {
  data:Array<T>,
  limit?:number,
  skip?:number,
  searchString?:string
}

export interface IProduct {
  price: number,
  active?: boolean,
  _id?: string,
  name: string,
  imgUrl?: string,
  description?: string,
  category?:ICategory,
}

export interface ICategory {
  _id: string,
  name: string,
  productCount?:number,
  description?:string
}

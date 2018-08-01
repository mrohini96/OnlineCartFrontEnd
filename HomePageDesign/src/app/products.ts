export class Products{
  //[x: string]: Products;
  ProductId: number;					//	Ref	on	category	belongs	to
  categoryId: number;
  //	The	title
  title: string;
  //	Price
  price: number;
  //	Description
  desc: string;
  //	Path	to	small	image
  image: string;
}
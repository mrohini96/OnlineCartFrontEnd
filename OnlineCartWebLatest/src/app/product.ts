export class Product{
  //  Product Id
  productId: number;					
  //	Product Name
  productName: string;
  //	Price
  productPrice: number;
  //  Category name
  categoryName: string;
  //	Product Description
  productDesc: string;
  //	Path	to	small	image
  productImage: string;
  // Available Quantity
  availableQuantity: number;
  // Default Cart icon for each product initialize with true
  // Post login based on the products in the cart this flag needs to be disabled
  productCartEnableFlag: boolean = false;
}
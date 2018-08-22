import { OrderDetail } from "./orderDetail";

export class Order {
   static userId: number;
   static orderId: number;
   static orderAmount: number;
   static orderShipAddress: string;
   static orderCity: string;
   static orderState: string;
   static orderCountry: string;
   static orderZip: string;
   static orderEmail: string;
   static orderPhone: string;
   static orderDate: string;
   static orderTrackingNumber: string;

   static oderDetails : OrderDetail[];
}
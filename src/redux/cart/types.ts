export interface CartData {
  id: string | number;
  phone_id: number | null;
  phone_quantity: number | null;
  baby_product_id: number | null;
  baby_products_quantity: number | null;
  cart_id: string | number;
}

export default interface Cart {
  data: CartData[];
  success: boolean;
  loading: boolean;
}

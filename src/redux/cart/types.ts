export interface CartData {
  id: string | number;
  phone_id: number;
  quantity: number;
  cart_id: string | number;
}

export default interface Cart {
  data: CartData[];
  success: boolean;
  loading: boolean;
}

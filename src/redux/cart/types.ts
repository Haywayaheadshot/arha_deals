export interface CartData {
  cart_item_id: number;
}

export default interface Cart {
  data: CartData[];
  success: boolean;
  loading: boolean;
}

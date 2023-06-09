export interface CartData {
  id: number;
}

export default interface Cart {
  data: CartData[];
  success: boolean;
  loading: boolean;
}

export interface Items {
  id: string;
  itemName: string;
  availableSince: string;
  price: string;
  stock: string;
  image_url: string;
}

export interface ExclusiveItemsState {
  items: Items[];
}

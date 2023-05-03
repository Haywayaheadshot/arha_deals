export interface Items {
  id: string;
  itemName: string;
  availableSince: string;
  Price: string;
  stock: string;
  image_url: string;
}

export interface ExclusiveItemsState {
  items: Items[];
}

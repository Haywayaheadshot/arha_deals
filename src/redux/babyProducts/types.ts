export interface BabyProductsData {
  id: string | number | null;
  name: string;
  amount: number;
  stock: number;
  images_src: [];
  specs: [];
  condition: string;
  video_src: string;
  features: [];
  productHightlights: [];
  category: string;
}

export default interface BabyProducts {
  data: BabyProductsData[];
  success: boolean;
  loading: boolean;
}

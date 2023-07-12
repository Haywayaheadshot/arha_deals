export interface BabyProductsData {
  id: string | number;
  name: string;
  amount: number;
  stock: number;
  images_src: [];
  specs: [];
  condition: string;
  video_src: string;
}

export default interface BabyProducts {
  data: BabyProductsData[];
  success: boolean;
  loading: boolean;
}

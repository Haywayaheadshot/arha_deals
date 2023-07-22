export interface PhonesData {
  id: string | number | null;
  name: string;
  amount: number;
  stock: number;
  images_src: [];
  specs: {
    capacity: string;
    body: {
      color: string;
      scratches: string;
      status: string;
      batteryHealth: number;
      screenSize: string;
    };
  };
  condition: string;
  video_src: string;
  category: string;
}

export default interface Phones {
  data: PhonesData[];
  success: boolean;
  loading: boolean;
}

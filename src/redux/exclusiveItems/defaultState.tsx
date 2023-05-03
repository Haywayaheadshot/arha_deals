import { v4 as uuidv4 } from "uuid";

const defaultState = [
  {
    id: uuidv4(),
    itemName: "Diamond 1",
    availableSince: "November, 10th 2023",
    price: "300 Ghc",
    stock: "2",
    image_url: "/rare_gem.png",
  },
  {
    id: uuidv4(),
    itemName: "Diamond 2",
    availableSince: "February, 12th 2001",
    price: "100 Ghc",
    stock: "1",
    image_url: "/rare_gem.png",
  },
];

export default defaultState;

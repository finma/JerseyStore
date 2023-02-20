declare type MenuType = {
  id: number;
  title: string;
  icon: any;
  page: string;
};

declare type JerseyType = {
  id: number | string;
  name: string;
  image: any[] | any;
  liga: {
    id: number | string;
    name: string;
    image: any[] | any;
  };
  price: number;
  weight: number;
  type: string;
  size: string[];
  ready?: boolean;
};

declare type OrderType = {
  id: number | string;
  orderDate: string;
  status: string;
  totalPrice: number;
  weight: number;
  orders: {
    id: number | string;
    product: JerseyType;
    totalOrder: number;
    totalprice: number;
    information: string | null;
    size: string;
  }[];
};

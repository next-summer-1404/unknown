export interface ICommonCardProps {
    id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  discounted_price: string;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: {
    lat: number;
    lng: number;
  };
  categories: {
    name: string;
  };
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  discount_id: string;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: string;
  bookings: number;
  favoriteId: string | null;
  isFavorite: boolean;
  // title: string;
  // discount?: string;
  // location?: string;
  // details?: string;
  // oldPrice?: string;
  // newPrice?: string;
  showTitle?: boolean;
  showSecondTitle?: boolean;
  showLocation?: boolean;
  showDetails?: boolean;
  showSecondDetails?: boolean;
  showPrice?: boolean;
  showSecondPrice?: boolean;
  showItemNumber?: boolean;
  showThirdPrice?: boolean;
  bgColor?: string;
}

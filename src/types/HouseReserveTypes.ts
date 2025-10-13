export interface HouseReserveTypes {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: number | null;
  discounted_price: string | null;
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
  discount_id: string | null;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: string;
  bookings: number;
  favoriteId: string | null;
  isFavorite: boolean;
}

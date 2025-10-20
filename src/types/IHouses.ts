export type IHouses = {
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
};

export interface HousesQueryParams {
  page?: number; 
  limit?: number;
  transactionType?: string; 
  search?: string;
  order?: string;
  sort?: string; 
  propertyType?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minRent?: number;
  maxRent?: number; 
  minMortgage?: number; 
  maxMortgage?: number; 
  minArea?: number; 
  maxArea?: number; 
  address?: string;

}
export interface RealEstate {
  id: number;
  title: string;
  imageUrl: string;
  address: string;
  city: string;
  contact: string;
  price: number;
  category: string;
  floor: number;
  area: number;
  rooms: number;
  bathrooms: number;
  totalFlors: number;
  elevator: boolean;
  balcony: boolean;
  description: string;
}
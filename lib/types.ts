export interface Company {
  id: string;
  name: string;
  nameBn: string;
  logo?: string;
  website?: string;
}

export interface Product {
  id: string;
  name: string;
  nameBn: string;
  brand: string;
  company: Company;
  category: string;
  image?: string;
  description?: string;
  size?: string;
  weight?: string;
  specifications?: string[];
  wholesalePrice: number;
  suggestedRetailPrice?: number;
  minimumOrderQuantity: number;
  variants?: ProductVariant[];
  availability: 'in_stock' | 'out_of_stock' | 'coming_soon';
  priceSource: 'verified' | 'listed' | 'estimated';
  priceSourceDate?: string;
  priceSourceURL?: string;
  estimatedProfitMargin?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  wholesalePrice?: number;
  availability?: 'in_stock' | 'out_of_stock';
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  icon?: string;
  description?: string;
}

export interface SearchFilters {
  company?: string;
  brand?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  minimumOrderQuantity?: number;
  availability?: 'in_stock' | 'out_of_stock';
  priceSource?: 'verified' | 'listed' | 'estimated';
}

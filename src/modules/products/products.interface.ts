export type TProduct = {
    _id?: string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    category: string;
    ratings: number;
    images: string[];
    featured: boolean;
    createdAt?: string;
    updatedAt?: string;
};

export type TProductsQuery = {
    searchValue?: string,
      category?: string,
      priceRange?: string,
      sortByPrice?: string
  };
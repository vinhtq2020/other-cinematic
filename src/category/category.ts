import { Attributes, Filter, Service } from 'onecore';
import { Repository } from 'query-core';

export interface CategoryFilter extends Filter {
  id?: string;
  categoryName?: string;
}
export interface Category {
  id: string;
  categoryName: string;
 
}
export interface CategoryRepository extends Repository<Category, string>{

}
export interface CategoryService extends Service<Category, string, CategoryFilter> {
  // getCategoryByName(categoryName: string): Promise<Category[]>;

}

export const categoryModel: Attributes = {
  id: {
    key: true,
    length: 40
  },
  categoryName: {
    required: true,
    length: 300,
  
  },
  
  
};

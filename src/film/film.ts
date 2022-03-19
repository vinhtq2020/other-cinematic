import { Attributes, Filter, Service } from 'onecore';
import { Repository } from 'query-core';

export interface FilmFilter extends Filter {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  trailerUrl?:string;
  status?:string;
}
export interface Film {
  filmId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  trailerUrl?: string;
  categories?: string[];
}
export interface FilmRepository extends Repository<Film, string>{

}
export interface FilmService extends Service<Film, string, FilmFilter> {
  
}
// const filmCategoryModel: Attributes = {
//   filmId: {
//     key: true
//   },
//   userId: {
//     key: true
//   },
// };
// export interface FilmCategory{
//   filmId?:string;
//   roleId:string;
// }

export const filmModel: Attributes = {
  filmId: {
    key: true,
    length: 40
  },
  title: {
    required: true,
    length: 300,
  
  },
  description: {
    length: 300,
  },
  imageUrl: {
    length: 300
  },
  trailerUrl: {
    length: 300
  },
  categories: {
    type: 'primitives',
  },
  status:{
    match:"equal",
    length:1
  },
  createdBy: {},
  createdAt: {
    type: 'datetime'
  },
  updatedBy: {},
  updatedAt: {
    type: 'datetime'
  },
  
};


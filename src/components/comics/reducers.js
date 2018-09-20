export const COMICS_LOAD = 'COMICS_LOAD';
export const COMIC_LOAD = 'COMIC_LOAD';
export const COMIC_ADD = 'COMIC_ADD';
export const CATALOG_ADD = 'CATALOG_ADD';

export const getComics = state => state.comics;
export const getComic = state => state.comic;
export const getCatalog = state => state.catalog;

export function comics(state = [], { type, payload }) {
  switch(type) {
    case COMICS_LOAD:
      return payload;
    default:
      return state;
  }
}

export function comic(state = {}, { type, payload }) {
  switch(type) {
    case COMIC_LOAD:
      return payload;
    case COMIC_ADD:
      return payload;
    default:
      return state;
  }
}

export function catalog(state = {}, { type, payload }) {
  switch(type) {
    case CATALOG_ADD:
      return payload;
    default:
      return state;
  }
}
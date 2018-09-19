export const COMICS_LOAD = 'COMICS_LOAD';
export const COMIC_LOAD = 'COMIC_LOAD';

export const getComics = state => state.comics;
export const getComic = state => state.comic;

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
    default:
      return state;
  }
}
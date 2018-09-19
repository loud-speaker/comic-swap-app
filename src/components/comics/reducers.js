export const COMICS_LOAD = 'COMICS_LOAD';

export const getComics = state => state.comics;

export function comics(state = [], { type, payload }) {
  switch(type) {
    case COMICS_LOAD:
      return payload;
    default:
      return state;
  }
}
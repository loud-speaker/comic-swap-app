import { COMICS_LOAD, COMIC_LOAD, COMIC_ADD } from './reducers';
import { getComicsList, getComicDetail, postComic } from '../../services/comicsApi';

export const loadComics = (params) => {
  return {
    type: COMICS_LOAD,
    payload: getComicsList(params)
  };
};

export const loadOneComic = (comicId) => {
  return {
    type: COMIC_LOAD,
    payload: getComicDetail(comicId)
  };
};

export const addComic = (comic) => {
  console.log('GOT TO ACTION');
  return {
    type: COMIC_ADD,
    payload: postComic(comic)
  };
};
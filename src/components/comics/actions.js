import { COMICS_LOAD, COMIC_LOAD, COMIC_ADD, CATALOG_ADD } from './reducers';
import { getComicsList, getComicDetail, postComic, postCatalog } from '../../services/comicsApi';

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
  return {
    type: COMIC_ADD,
    payload: postComic(comic)
  };
};

export const addCatalog = (catalog) => {
  return {
    type: CATALOG_ADD,
    payload: postCatalog(catalog)
  };
};
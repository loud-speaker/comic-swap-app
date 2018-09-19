import { COMICS_LOAD, COMIC_LOAD } from './reducers';
import { getComicsList, getComicDetail } from '../../services/comicsApi';

export const loadComics = (params) => {
  // console.log('ACTION PARAMS', params);
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
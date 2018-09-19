import { COMICS_LOAD } from './reducers';
import { getComicsList } from '../../services/comicsApi';

export const loadComics = (params) => {
  console.log('ACTION PARAMS', params);
  return {
    type: COMICS_LOAD,
    payload: getComicsList(params.limit)
  };
};
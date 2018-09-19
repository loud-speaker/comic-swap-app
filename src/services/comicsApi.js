import { get, post } from './request';

const URL = '/api';
const COMICS_URL = `${URL}/comics`;

export const getComicsList = (params) => get(`${COMICS_URL}/comic-search`, {}, params);
export const getComicDetail = (comicId) => get(`${COMICS_URL}/comic-detail`, {}, { id: comicId });

export const postComic = comic => post(COMICS_URL, comic);

/* eslint-disable no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { ICategory } from './Categories';
import { IPost } from './Posts';
import { IMedia } from './Media';

export interface IBlogService {
	getCategories(): AxiosResponse<ICategory[]>;
	getPosts(): AxiosResponse<IPost[]>;
	getMedia(): AxiosResponse<IMedia[]>;
	getMediaById(id: number): AxiosResponse<IMedia>;
	getPostById(id: number): AxiosResponse<IPost>;
}

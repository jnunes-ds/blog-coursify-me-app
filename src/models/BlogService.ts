/* eslint-disable no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { ICategory } from './Categories';
import { IPost } from './Posts';
import { IMedia } from './Media';

export interface IBlogService {
	getCategories(): Promise<AxiosResponse<ICategory[], AxiosError>>;
	getPosts(): Promise<AxiosResponse<IPost[], AxiosError>>;
	getMedia(): Promise<AxiosResponse<IMedia[], AxiosError>>;
	getMediaById(id: number): Promise<AxiosResponse<IMedia, AxiosError>>;
	getPostById(id: number): Promise<AxiosResponse<IPost, AxiosError>>;
	getPostsByCategory(categoryId: number): Promise<AxiosResponse<IPost[], AxiosError>>
}

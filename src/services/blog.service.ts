/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable lines-between-class-members */
import { AxiosResponse, AxiosError } from 'axios';
import { ICategory } from '~/models/Categories';
import { IMedia } from '~/models/Media';
import { IPost } from '~/models/Posts';
import { IBlogService } from '../models/BlogService';
import api from './api';

class BlogService implements IBlogService {
  // @ts-ignore
  async getCategories(): Promise<AxiosResponse<ICategory[], AxiosError<any, any>>> {}
  public static async getCategories(): Promise<AxiosResponse<ICategory[], AxiosError<any, any>>> {
    try {
      return await api.get('categories');
    } catch (error: any) {
      throw new Error('getCategories', error);
    }
  }

  // @ts-ignore
  async getPosts(): Promise<AxiosResponse<IPost[], AxiosError<any, any>>> {}
  public static async getPosts(): Promise<AxiosResponse<IPost[], AxiosError<any, any>>> {
    try {
      return await api.get('posts');
    } catch (error: any) {
      throw new Error('getPosts', error);
    }
  }

  // @ts-ignore
  async getMedia(): Promise<AxiosResponse<IMedia[], AxiosError<any, any>>> {}
  public static async getMedia(): Promise<AxiosResponse<IMedia[], AxiosError<any, any>>> {
    try {
      return await api.get('media');
    } catch (error: any) {
      throw new Error('getMedia', error);
    }
  }

  // @ts-ignore
  async getMediaById(id: number): Promise<AxiosResponse<IMedia, AxiosError<any, any>>> {}
  public static async getMediaById(id: number): Promise<AxiosResponse<IMedia, AxiosError<any, any>>> {
    try {
      return await api.get(`media/${id}`);
    } catch (error: any) {
      throw new Error('getMediaById', error);
    }
  }

  // @ts-ignore
  async getPostById(id: number): Promise<AxiosResponse<IPost, AxiosError<any, any>>> {}
  public static async getPostById(id: number): Promise<AxiosResponse<IPost, AxiosError<any, any>>> {
    try {
      return await api.get(`posts/${id}`);
    } catch (error: any) {
      throw new Error('getPostsById', error);
    }
  }
}

export default BlogService;

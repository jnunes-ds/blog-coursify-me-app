/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';
import { AxiosResponse } from 'axios';
import { ICompleteCategories } from '~/models/Categories';

import BlogService from '~/services/blog.service';
import { IPost } from '../models/Posts';

interface IPostsContextProps {
	// eslint-disable-next-line no-unused-vars
	getPost(id: number): Promise<AxiosResponse<IPost> | void>;
	getAllPosts(): Promise<void>;
	allCategories: ICompleteCategories[];
}

interface Props {
	children: ReactNode;
}

const PostsContext = createContext<IPostsContextProps>({} as IPostsContextProps);

export function PostsContextProvider({ children }: Props) {
  const [allCategories, setAllCategories] = useState<ICompleteCategories[]>([]);

  const getAllPosts = async () => {
    try {
      const response = await BlogService.getPosts();
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id: number) => {
    try {
      const response = await BlogService.getPostById(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{ allCategories, getAllPosts, getPost }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts(): IPostsContextProps {
  const context = useContext(PostsContext);

  return context;
}

/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';
import { ICompleteCategories } from '~/models/Categories';

import BlogService from '~/services/blog.service';
import { IPost } from '../models/Posts';

interface IPostsContextProps {
	// eslint-disable-next-line no-unused-vars
	getPost(id: number): Promise<IPost| void>;
	getAllPosts(): Promise<void>;
	allCategories: ICompleteCategories[];
}

interface Props {
	children: ReactNode;
}

const PostsContext = createContext<IPostsContextProps>({} as IPostsContextProps);

export function PostsContextProvider({ children }: Props) {
  const [allCategories, setAllCategories] = useState<ICompleteCategories[]>([]);

  const getCategoriesId = async () => {
    try {
      const response = await BlogService.getCategories();
      if (response) {
        const tempCategoriesList = response.data.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        return { tempCategoriesList };
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const getAllPosts = async () => {
    try {
      const response = await getCategoriesId();
      if (response) {
        const { tempCategoriesList } = response;
        const tempAllPostsByCategoriesList = [] as ICompleteCategories[];
        tempCategoriesList.map(async (item) => {
          const tempItemContent = await BlogService.getPostsByCategory(item.id);
          const tempItem: ICompleteCategories = {
            id: item.id,
            name: item.name,
            posts: tempItemContent.data,
          };
          setAllCategories((prevState) => (prevState ? [...prevState, tempItem] : [tempItem]));
        });
        setAllCategories(tempAllPostsByCategoriesList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id: number) => {
    try {
      const response = await BlogService.getPostById(id);
      return response.data;
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

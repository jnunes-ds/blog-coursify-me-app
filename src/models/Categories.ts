import { IPost } from './Posts';

export interface ICategory {
	id: number;
	name: string;
}

export interface ICompleteCategories extends ICategory {
	posts: IPost[];
}

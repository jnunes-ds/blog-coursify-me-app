interface IRendered {
	rendered: string;
}
export interface IPost {
	id: number;
	name: string;
	status: string;
	featured_media: number;
	content: IRendered;
	title: IRendered;
	excerpt: IRendered;
	page_views: number;
	categories: Array<number>;
}

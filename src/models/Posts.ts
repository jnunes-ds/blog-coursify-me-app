export interface IPost {
	id: number;
	name: string;
	status: string;
	featured_media: number;
	content: {
		rendered: string;
	};
	page_views: number;
	categories: Array<number>;
}

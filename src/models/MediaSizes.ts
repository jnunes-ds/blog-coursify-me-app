interface ISizeContent {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}
export interface ISizeType {
	'thumbnail'?: ISizeContent;
	'medium'?: ISizeContent;
	'medium_large'?: ISizeContent;
	'large'?: ISizeContent;
	'post-thumbnail'?: ISizeContent;
	'full'?: ISizeContent
}

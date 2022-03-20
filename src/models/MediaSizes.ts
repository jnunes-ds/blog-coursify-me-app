interface IThumbnailSize {
	['thumbnail']: {
		file: string;
		width: number;
		height: number;
		mime_type: string;
		source_url: string;
	}
}

interface IMediumSize {
	['medium']: {
		file: string;
		width: number;
		height: number;
		mime_type: string;
		source_url: string;
	}
}

interface IMediumLargeSize {
	['medium_large']: {
		file: string;
		width: number;
		height: number;
		mime_type: string;
		source_url: string;
	}
}

interface ILargeSize {
	['large']: {
		file: string;
		width: number;
		height: number;
		mime_type: string;
		source_url: string;
	}
}

interface IPostThumbnailSize {
	['post-thumbnail']: {
		file: string;
		width: number;
		height: number;
		mime_type: string;
		source_url: string;
	}
}

interface IFullSize {
	['full']: {
		file: string;
		width: number;
		height: number;
		mime_type: string;
		source_url: string;
	}
}

export type SizeType =
	IThumbnailSize
	| IMediumSize
	| IMediumLargeSize
	| ILargeSize
	| IPostThumbnailSize
	| IFullSize;

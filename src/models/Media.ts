import { SizeType } from './MediaSizes';

export interface IMedia {
	id: number;
	title: {
		rendered: string;
	};
	media_details: {
		size: SizeType
	};
}

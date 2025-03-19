export interface IProduct {
	id: number;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
}

export interface IPost {
	id: number;
	title: string;
	text: string;
	author: string;
}

export interface IReview {
	id: number;
	name: string;
	text: string;
}

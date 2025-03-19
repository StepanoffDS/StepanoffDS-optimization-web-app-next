import { IPost } from '@/index';
import { Container, Typography } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
	title: 'Пост - Эко Мир',
};

const getPostById = async (slug: string): Promise<IPost | undefined> => {
	const id = String(slug);

	try {
		const response = await fetch(
			`https://62c6f5e76c899185.mokky.dev/posts/${id}`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
				next: { revalidate: 3600 },
			},
		);

		if (response.ok) {
			const json = await response.json();
			return json;
		}
	} catch (error) {
		console.error(error);
	}
};

const PostPage = async ({
	params,
}: {
	params: Promise<{ postId: string }>;
}) => {
	const postId = (await params).postId;

	const post = await getPostById(postId);

	if (!post) notFound();

	return (
		<Container>
			<Typography variant='body2'>{post.author}</Typography>
			<Typography variant='h4' sx={{ mb: 2 }}>
				{post.title}
			</Typography>
			<Typography variant='body2'>{post.text}</Typography>
		</Container>
	);
};

export default PostPage;

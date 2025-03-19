import { IPost } from '@/index';
import { Button, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PostCard from '@/components/blog/post-card';

export const metadata: Metadata = {
	title: 'Блог - Эко Мир',
};

const fetchPosts = async () => {
	try {
		const response = await fetch(`https://62c6f5e76c899185.mokky.dev/posts`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			const json = await response.json();
			return json;
		} else {
			return new Error();
		}
	} catch (error) {
		console.error(error);
	}
};

const BlogPage = async () => {
	const posts = await fetchPosts();

	return (
		<Container>
			<Stack spacing={2}>
				<Stack spacing={2}>
					<Typography
						variant='h4'
						component={'h1'}
						sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
					>
						Блог{' '}
						<Typography>
							<Button sx={{ fontSize: 12, fontWeight: 500 }}>
								<Link href={'/blog/add'}>+ Добавить статью</Link>
							</Button>
						</Typography>
					</Typography>
					<Grid container spacing={2}>
						{posts?.map((item: IPost) => (
							<Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
								<PostCard item={item} />
							</Grid>
						))}
					</Grid>
				</Stack>
			</Stack>
		</Container>
	);
};

export default BlogPage;

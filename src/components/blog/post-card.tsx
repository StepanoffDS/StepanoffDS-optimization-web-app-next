'use client';

import { IPost } from '@/index';
import {
	Card,
	CardContent,
	Stack,
	Button,
	Typography,
	CardActions,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const PostCard = ({ item }: { item: IPost }) => {
	const deletePost = async (id: number) => {
		try {
			const response = await fetch(
				`https://62c6f5e76c899185.mokky.dev/posts/${id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			if (response.ok) {
				console.log('Post deleted successfully');
				window.location.reload();
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Card
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardContent sx={{ position: 'relative' }}>
				<Stack
					direction='row'
					spacing={1}
					sx={{ position: 'absolute', top: 10, right: 10 }}
				>
					<Button
						variant='outlined'
						sx={{ p: 0.5, width: 40, minWidth: 0 }}
						onClick={() => deletePost(item.id)}
					>
						<DeleteIcon />
					</Button>
					<Button variant='outlined' sx={{ p: 0.5, width: 40, minWidth: 0 }}>
						<Link href={`/blog/edit/${String(item.id)}`}>
							<EditIcon />
						</Link>
					</Button>
				</Stack>
				<Typography
					gutterBottom
					sx={{ color: 'text.secondary', fontSize: 14, mt: 2 }}
				>
					{item.author}
				</Typography>
				<Typography variant='h5' component='div' sx={{ lineHeight: 1, mb: 1 }}>
					{item.title}
				</Typography>
				<Typography variant='body2' sx={{ color: 'text.secondary' }}>
					{item.text.slice(0, 100)}...
				</Typography>
			</CardContent>
			<CardActions sx={{ mt: 'auto' }}>
				<Button size='small'>
					<Link href={`/blog/${String(item.id)}`}>Подробнее</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default PostCard;

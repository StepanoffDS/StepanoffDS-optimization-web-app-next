import { IReview } from '@/index';
import {
	Button,
	Card,
	CardContent,
	Container,
	Stack,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import React from 'react';

const fetchReviews = async () => {
	try {
		const response = await fetch(`https://62c6f5e76c899185.mokky.dev/reviews`, {
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

const ReviewsPage = async () => {
	const reviews = await fetchReviews();

	console.log(reviews);

	return (
		<Container>
			<Stack spacing={2}>
				<Typography variant='h4' component={'h1'}>
					Отзывы
				</Typography>
				<Grid container spacing={2}>
					{reviews?.map((item: IReview) => (
						<Grid size={{ xs: 12, md: 6 }} key={item.id}>
							<Card>
								<CardContent sx={{ height: '100%' }}>
									<Typography variant='h5' component='div'>
										{item.name}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{item.text}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Button variant='contained'>
					<Link href={`/reviews/add`}>Добавить отзыв</Link>
				</Button>
			</Stack>
		</Container>
	);
};

export default ReviewsPage;

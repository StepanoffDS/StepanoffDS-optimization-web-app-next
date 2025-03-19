import { IProduct } from '@/index';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Stack,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
	title: 'Продукты - Эко Мир',
};

const fetchProducts = async () => {
	try {
		const response = await fetch(
			`https://62c6f5e76c899185.mokky.dev/products`,
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
		} else {
			return new Error();
		}
	} catch (error) {
		console.error(error);
	}
};

const ProductsPage = async () => {
	const products = await fetchProducts();

	console.log(products);

	return (
		<Container>
			<Stack spacing={2}>
				<Stack spacing={2}>
					<Typography variant='h4' component={'h1'}>
						Продукты
					</Typography>
					<Grid container spacing={2}>
						{products?.map((item: IProduct) => (
							<Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										sx={{ height: 220 }}
										image={item.imageUrl}
										title={item.name}
									/>
									<CardContent>
										<Typography gutterBottom variant='h5' component='div'>
											{item.name}
										</Typography>
										<Typography
											variant='body2'
											sx={{ color: 'text.secondary' }}
										>
											Lizards are a widespread group of squamate reptiles, with
											over 6,000 species, ranging across all continents except
											Antarctica
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small'>
											<Link href={`/products/${String(item.id)}`}>
												Подробнее
											</Link>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Stack>
		</Container>
	);
};

export default ProductsPage;

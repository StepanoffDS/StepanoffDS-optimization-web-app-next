import { IProduct } from '@/index';
import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
	title: 'Продукты - Эко Мир',
};

const getProductById = async (slug: string): Promise<IProduct | undefined> => {
	const id = String(slug);

	try {
		const response = await fetch(
			`https://62c6f5e76c899185.mokky.dev/products/${id}`,
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

const ProductPage = async ({
	params,
}: {
	params: Promise<{ productId: string }>;
}) => {
	const productId = (await params).productId;

	const product = await getProductById(productId);

	if (!product) notFound();

	console.log(product);
	return (
		<Container>
			<Grid container spacing={4}>
				<Grid size={{ xs: 12, md: 6, lg: 4 }}>
					<Image
						src={product.imageUrl}
						width={600}
						height={400}
						alt={product.name}
					/>
				</Grid>
				<Grid size={{ xs: 12, md: 6, lg: 8 }}>
					<Stack spacing={2}>
						<Typography variant='h4'>{product.name}</Typography>
						<Typography variant='body2'>Цена: {product.price}</Typography>
						<Typography variant='body2'>
							Описание: {product.description}
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductPage;

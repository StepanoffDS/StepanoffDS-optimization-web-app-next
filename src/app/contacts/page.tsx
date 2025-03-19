import {
	Box,
	Card,
	CardContent,
	Container,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import React from 'react';

const ContactsPage = () => {
	return (
		<Container>
			<Stack spacing={4}>
				<Box sx={{ textAlign: 'center' }}>
					<Typography variant='h4'>Контактная информация</Typography>
					<Typography variant='body2'>
						Свяжитесь с нами любым удобным способом
					</Typography>
				</Box>

				<Grid container spacing={2}>
					<Grid size={{ xs: 12, md: 4 }}>
						<Card sx={{ height: '100%' }}>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<Typography variant='h5'>Телефон</Typography>
								<Link href='tel:+79991234567'>+7 (999) 123-45-67</Link>
							</CardContent>
						</Card>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Card sx={{ height: '100%' }}>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<Typography variant='h5'>Email</Typography>
								<Link href='mailto:eco@world.ru'>eco@world.ru</Link>
							</CardContent>
						</Card>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Card sx={{ height: '100%' }}>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<Typography variant='h5'>Адрес</Typography>
								<Typography variant='body2'>
									Самара, Московское шоссе, 122
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Stack>
		</Container>
	);
};

export default ContactsPage;

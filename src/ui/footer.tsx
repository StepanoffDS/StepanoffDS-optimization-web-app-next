import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid2';
import { nav } from '@/utils/constants';

const Footer = () => {
	return (
		<div className='mt-auto'>
			<Box
				component='footer'
				sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 3 }}
			>
				<Container>
					<Grid container spacing={3}>
						<Grid size={{ xs: 12, sm: 4 }}>
							<Typography variant='h5' component='h2'>
								ЭкоМир
							</Typography>
						</Grid>
						<Grid size={{ xs: 12, sm: 4 }}>
							<Typography variant='h6' component='h2'>
								Полезные ссылки
							</Typography>
							{nav.map((item) => (
								<Fragment key={item.id}>
									<Link href={item.href} color='inherit'>
										{item.name}
									</Link>
									<br />
								</Fragment>
							))}
						</Grid>
						<Grid size={{ xs: 12, sm: 4 }}>
							<Typography variant='h6' component='h2'>
								Связаться с нами
							</Typography>
							<Typography variant='body2'>Email: info@example.com</Typography>
							<Typography variant='body2'>Телефон: +7 123 456 7890</Typography>
						</Grid>
					</Grid>
					<Typography variant='body2' align='center' sx={{ mt: 3 }}>
						© {new Date().getFullYear()} ЭкоМир. Все права защищены.
					</Typography>
				</Container>
			</Box>
		</div>
	);
};

export default Footer;

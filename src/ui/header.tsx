'use client';

import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
// import Link from 'next/link';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { nav } from '@/utils/constants';

const Header = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					ЭкоМир
				</Typography>
				{isMobile ? (
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
				) : (
					<>
						{nav.map((item) => (
							<Button color='inherit' key={item.id}>
								<Link href={item.href}>{item.name}</Link>
							</Button>
						))}
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;

'use client';

import {
	Alert,
	Button,
	Container,
	Link,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

const AddingReviewPage = () => {
	const [author, setAuthor] = useState('');
	const [text, setText] = useState('');

	const [authorError, setAuthorError] = useState('');
	const [textError, setTextError] = useState('');

	const [isSuccess, setIsSuccess] = useState(false);

	const onSubmit = async () => {
		setIsSuccess(false);
		setAuthorError('');
		setTextError('');

		if (!author) {
			setAuthorError('Введите автора');
			return;
		}

		if (!text) {
			setTextError('Введите текст');
			return;
		}

		try {
			const response = await fetch(
				'https://62c6f5e76c899185.mokky.dev/reviews',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ name: author, text }),
				},
			);

			if (response.ok) {
				const json = await response.json();
				console.log(json);

				setIsSuccess(true);
				setAuthor('');
				setText('');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Container>
			{isSuccess && (
				<Alert severity='success'>
					Отзыв успешно создан. <Link href={`/reviews`}>Перейти к отзывам</Link>
				</Alert>
			)}
			<Stack spacing={2}>
				<Typography
					variant='h4'
					component={'h1'}
					sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
				>
					Создать статью
				</Typography>

				<Stack spacing={2}>
					<TextField
						label='Автор'
						error={!!authorError}
						helperText={authorError}
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
					<TextField
						label='Текст'
						multiline
						rows={8}
						error={!!textError}
						helperText={textError}
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<Button variant='contained' onClick={onSubmit}>
						Сохранить
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};

export default AddingReviewPage;

'use client';

import {
	Alert,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

const AddingPostPage = () => {
	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const [authorError, setAuthorError] = useState('');
	const [titleError, setTitleError] = useState('');
	const [textError, setTextError] = useState('');

	const [isSuccess, setIsSuccess] = useState(false);

	const onSubmit = async () => {
		setIsSuccess(false);
		setAuthorError('');
		setTitleError('');
		setTextError('');

		if (!author) {
			setAuthorError('Введите автора');
			return;
		}
		if (!title) {
			setTitleError('Введите заголовок');
			return;
		}
		if (!text) {
			setTextError('Введите текст');
			return;
		}

		try {
			const response = await fetch('https://62c6f5e76c899185.mokky.dev/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ author, title, text }),
			});

			if (response.ok) {
				const json = await response.json();
				console.log(json);

				setIsSuccess(true);
				setAuthor('');
				setTitle('');
				setText('');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Container>
			{isSuccess && <Alert severity='success'>Статья успешно создана</Alert>}
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
						label='Заголовок'
						error={!!titleError}
						helperText={titleError}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
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

export default AddingPostPage;

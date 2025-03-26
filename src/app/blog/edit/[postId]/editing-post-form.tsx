'use client';

import {
	Alert,
	Stack,
	Typography,
	TextField,
	Button,
	Link,
} from '@mui/material';
import LinkNext from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import React, { useCallback, useEffect, useState } from 'react';

const EditingPostForm = ({ id }: { id: string }) => {
	const router = useRouter();
	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const [authorError, setAuthorError] = useState('');
	const [titleError, setTitleError] = useState('');
	const [textError, setTextError] = useState('');

	const [isSuccess, setIsSuccess] = useState(false);

	const fetchPost = useCallback(async () => {
		try {
			const response = await fetch(
				`https://62c6f5e76c899185.mokky.dev/posts/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			if (response.ok) {
				const json = await response.json();
				setAuthor(json.author);
				setTitle(json.title);
				setText(json.text);
				router.refresh();
			}
		} catch (error) {
			console.error(error);
		}
	}, [id]);

	useEffect(() => {
		fetchPost();
	}, [id, fetchPost]);

	const handleEditing = async () => {
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
			console.log(author, title, text);
			const response = await fetch(
				`https://62c6f5e76c899185.mokky.dev/posts/${id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ author, title, text }),
				},
			);

			if (response.ok) {
				const json = await response.json();
				console.log(json);

				setIsSuccess(true);
				setAuthor('');
				setTitle('');
				setText('');

				await fetchPost();
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{isSuccess && (
				<Alert severity='success'>
					Статья успешно отредактирована.{' '}
					<Link href={'/blog'} component={LinkNext}>
						Вернуться к блогу
					</Link>
				</Alert>
			)}
			<Stack spacing={2}>
				<Typography
					variant='h4'
					component={'h1'}
					sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
				>
					Отредактировать статью (id: {id})
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
					<Button variant='contained' onClick={handleEditing}>
						Сохранить
					</Button>
				</Stack>
			</Stack>
		</>
	);
};

export default EditingPostForm;

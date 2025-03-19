import { Container } from '@mui/material';

import EditingPostForm from './editing-post-form';

const EditingPostPage = async ({
	params,
}: {
	params: Promise<{ postId: string }>;
}) => {
	const postId = (await params).postId;

	return (
		<Container>
			<EditingPostForm id={postId} />
		</Container>
	);
};

export default EditingPostPage;

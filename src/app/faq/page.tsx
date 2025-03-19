import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
	return (
		<Container>
			<Stack spacing={2}>
				<Typography variant='h4' component={'h1'}>
					FAQ
				</Typography>
				<Box>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='h4' variant='h6'>
								Как долго будет идти доставка моего заказа?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Время доставки зависит от вашего местоположения и выбранного
							способа доставки. Обычно доставка занимает от 1 до 5 рабочих дней.
							Более точную информацию вы можете увидеть при оформлении заказа.
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='h4' variant='h6'>
								Можно ли вернуть товар?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Да, вы можете вернуть товар в течение 14 дней с момента получения.
							Товар должен быть в оригинальной упаковке и не иметь признаков
							использования.
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='h4' variant='h6'>
								Как оформить возврат?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Для оформления возврата свяжитесь с нашей службой поддержки по
							телефону или электронной почте, указанной на странице
							&quot;Контакты&quot;. Наш специалист поможет вам с оформлением
							возврата.
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
						>
							<Typography component='h4' variant='h6'>
								Где производится ваша продукция?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							Мы сотрудничаем с местными фермерами и производителями, которые
							находятся в России. Вся продукция проходит строгий контроль
							качества.
						</AccordionDetails>
					</Accordion>
				</Box>
			</Stack>
		</Container>
	);
};

export default FAQ;

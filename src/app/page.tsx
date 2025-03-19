import { homeBenefits } from '@/utils/constants';
import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

export default function Home() {
	return (
		<Container>
			<Stack spacing={2}>
				<Typography variant='h3' component='h1'>
					ЭкоМир
				</Typography>
				<Grid container spacing={2}>
					<Grid size={{ xs: 12, md: 8 }}>
						<p>
							– это команда единомышленников, увлеченных идеей здорового образа
							жизни и заботы об окружающей среде. Мы верим, что каждый человек
							может внести свой вклад в сохранение природы, делая осознанный
							выбор в пользу экологически чистых продуктов. Наша миссия –
							предложить покупателям широкий ассортимент качественных
							экопродуктов, которые соответствуют высоким стандартам
							безопасности и помогают поддерживать здоровье и благополучие.
						</p>

						<p>
							Мы тщательно отбираем поставщиков, сотрудничаем только с теми, кто
							использует натуральные методы выращивания и производства, исключая
							вредные химические вещества и ГМО. Каждый продукт проходит строгий
							контроль качества, чтобы вы могли быть уверены в его пользе для
							вашего организма и планеты.
						</p>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Image src='/banner.jpg' alt='banner' width={1360} height={800} />
					</Grid>
				</Grid>

				<Stack spacing={2}>
					<Typography variant='h4'>Наши основные ценности</Typography>
					<Grid container spacing={2}>
						{homeBenefits.map((item) => (
							<Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
								<Card variant='outlined'>
									<CardContent>
										<Typography variant='h6'>
											Здоровье и безопасность
										</Typography>
										<Typography variant='body2'>
											Мы стремимся к тому, чтобы наши продукты были максимально
											полезными и безопасными для здоровья наших клиентов. Все
											товары проходят тщательную проверку на соответствие
											экологическим стандартам.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Stack>
		</Container>
	);
}

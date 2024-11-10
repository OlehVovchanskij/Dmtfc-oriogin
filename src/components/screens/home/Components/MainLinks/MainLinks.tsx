import { Container, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const MainLinks: FC = () => {
	return (
		<Container className=' mt-[140px] mb-[140px] w-full flex'>
			<Stack
				direction='row'
				flexWrap='wrap'
				rowGap='60px'
				alignItems='center'
				width='100%'
				fontSize='12px'
				columnGap='40px'
				justifyContent='center'
				sx={{
					display: {
						xs: 'flex',
						sm: 'flex',
						md: 'flex',
						lg: 'flex',
						xl: 'flex',
					},
				}}
			>
				<div className='py-[10px] px-[25px] w-[300px] flex flex-wrap flex-col h-[300px]   shadow-[0_0_6px_7px_rgba(0,0,0,25%)] justify-around items-center '>
					<Image
						src='/Home/MainLinks/1.svg'
						width={118}
						height={118}
						alt='Спеціальності'
					/>
					<p className='text-center '>
						Список спеціальностей які наш коледж може надати вам.
					</p>
					<Link href='/'>Спеціальності</Link>
				</div>
				<div className='py-[10px] px-[25px] w-[300px] flex flex-wrap flex-col h-[300px]   shadow-[0_0_6px_7px_rgba(0,0,0,25%)] justify-around items-center '>
					<Image
						src='/Home/MainLinks/2.svg'
						width={118}
						height={118}
						alt='Рейтинг студентів'
					/>
					<p className='text-center '>
						Рейтинг успішності студентів I-IV курсів.
					</p>
					<Link href='/'>Рейтинг студентів</Link>
				</div>
				<div className='py-[10px] px-[25px] w-[300px] flex flex-wrap flex-col h-[300px]   shadow-[0_0_6px_7px_rgba(0,0,0,25%)] justify-around items-center '>
					<Image
						src='/Home/MainLinks/3.svg'
						width={118}
						height={118}
						alt='ЗНО'
						className='w-[118px] h-[118px]'
					/>
					<p className='text-center '>
						Інформація для студентів коледжу стосовно здачі зовнішнього
						незалежнього оцінювання.
					</p>
					<Link href='/'>ЗНО</Link>
				</div>
			</Stack>
		</Container>
	)
}

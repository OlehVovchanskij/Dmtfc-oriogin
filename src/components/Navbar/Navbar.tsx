'use client'
import MenuIcon from '@mui/icons-material/Menu'
import {
	Box,
	Container,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	Stack,
	Typography,
} from '@mui/material'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// humber menu props typescript interface
interface THamburgerMenuProps {
	open: boolean
	handleDrawerOpen: () => void
}

// all menu items here. you can customize or add as your need
const menuItems = (
	<>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Головна
		</Typography>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Про коледж
		</Typography>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Новини
		</Typography>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Спеціальності
		</Typography>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Студенту
		</Typography>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Абітурієнту
		</Typography>
		<Typography component={Link} href='/' fontWeight={600} color='#101010'>
			Контакти
		</Typography>
	</>
)

// navbar component start
const Navbar = () => {
	// modal state
	const [open, setOpen] = useState<boolean>(false)

	// drawer open function
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	// drawer close function
	const handleDrawerClose = () => {
		setOpen(false)
	}
	const useScrollPosition = () => {
		const [scrollPosition, setScrollPosition] = useState(0)

		useEffect(() => {
			const handleScroll = () => {
				setScrollPosition(window.scrollY) // Отримуємо вертикальне положення скролу
			}

			window.addEventListener('scroll', handleScroll)

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}, [])

		return scrollPosition
	}

	return (
		<Stack
			className={cn(useScrollPosition() > 420 ? 'fixed w-full' : 'w-full')}
		>
			{/* navbar start */}
			<Box
				sx={{
					width: '100%',
					height: '8vh',
					display: 'flex',
					alignItems: 'center',
					fontFamily: 'FiraSans',
					fontWeight: 600,
					backgroundColor: '#ffffff',
					boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
					padding: '10px 0px', // adjust padding according to your need
					'& a': {
						textDecoration: 'none',
					},
				}}
			>
				<Container>
					{/* navbar stack */}
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						sx={{
							padding: '8px 0',
						}}
					>
						{/* logo */}
						<Box component={Link} href='/' color='transparent'>
							<Typography fontWeight={600} variant='h5'>
								<Image
									src='/Home/Header/logo.svg'
									width={47}
									height={47}
									alt='Дрогобицький механіко-технологічний фаховий коледж'
								/>
							</Typography>
						</Box>

						{/* menu items start */}
						<Stack
							direction='row'
							gap={4}
							alignItems='center'
							sx={{
								'& a:hover': {
									textDecoration: 'underline',
									transition: 'ease-in-out 0.2s',
								},
								display: {
									xs: 'none',
									sm: 'none',
									md: 'flex',
									lg: 'flex',
									xl: 'flex',
								},
							}}
						>
							{/* menu items rendered here*/}
							{menuItems}
						</Stack>

						{/* Hamburger Menu */}
						<Hidden lgUp>
							{/* custom hamburger menu component. see below in this component */}
							<HamburgerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
						</Hidden>
					</Stack>
				</Container>
			</Box>
			{/* Drawer for Hamburger Menu in medium device*/}
			{/* responsive drawer */}
			<Hidden lgUp>
				<Drawer anchor='right' open={open} onClose={handleDrawerClose}>
					{/* menu items list component start here*/}
					<List>
						<ListItem sx={{ width: 300 }}>
							<Stack
								direction='column'
								gap={2}
								sx={{
									'& a:hover': {
										color: '#7F3971',
										transition: 'ease-in-out 0.6s',
									},
								}}
							>
								{/* menu items rendered here in medium devices */}
								{menuItems}
							</Stack>
						</ListItem>
					</List>
				</Drawer>
			</Hidden>
		</Stack>
	)
}

// Hamburger Menu component
const HamburgerMenu = ({ handleDrawerOpen }: THamburgerMenuProps) => {
	return (
		<IconButton
			sx={{ display: { sm: 'block', md: 'none' } }}
			onClick={handleDrawerOpen}
		>
			<MenuIcon />
		</IconButton>
	)
}

export default Navbar

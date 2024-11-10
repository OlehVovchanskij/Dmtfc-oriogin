import { Line } from '@/components/Line'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import Header from './Components/Header/Header'
import { MainLinks } from './Components/MainLinks/MainLinks'
import Separator from './Components/Separator/Separator'

const Navbar = dynamic(() => import('../../Navbar/Navbar'), { ssr: false })
const Home: FC = () => {
	return (
		<>
			<Navbar />
			<Line />
			<Header />
			<Line />
			<MainLinks />
			<Line />
			<Separator>Історія і сьогодення</Separator>
		</>
	)
}

export default Home

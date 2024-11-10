import {
	Email,
	KeyboardArrowDown,
	KeyboardArrowUp,
	Map,
	Phone,
} from '@mui/icons-material'
import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const [showed, setShowed] = useState<boolean>(false)
	const handleShow = () => {
		setShowed(!showed)
	}

	return (
		<div className='w-full h-[90vh]  bg-center bg-[url("/Home/Header/Header_bg.png")] bg-cover bg-no-repeat flex flex-col justify-between items-center'>
			<h1 className=' [text-shadow:_7px_3px_0_0_rgb(16,16,16,43%)]  text-center  text-[#ffffff] text-[30px] sm:text-[40px] lg:text-[40px] font-semibold   '>
				Дрогобицький
				<br />
				механіко-технолгічний фаховий коледж
			</h1>
			<div className='flex flex-col items-center'>
				<div
					className='bg-[#7F3971] text-[32px] w-[70px] h-[40px] flex justify-center items-center text-[#FFFFFF] rounded-t-[10px] cursor-pointer'
					onClick={handleShow}
				>
					{showed ? (
						<KeyboardArrowDown fontSize='large' />
					) : (
						<KeyboardArrowUp fontSize='large' />
					)}
				</div>
				<div
					className={cn(
						showed ? 'h-[150px] py-2' : 'h-[0] py-0',
						'flex flex-col   px-7 text-[#FFFFFF] font-bold italic slide__menu w-[350px]  bg-[#7F3971] transition-all ease-linear '
					)}
				>
					<div className='title text-center text-[34px]'>Контакти</div>
					<div>
						<div className='flex gap-x-[7px]'>
							<Map />
							<span className='text-[18px]'>
								м. Дрогобич, вул. Раневицька 12
							</span>
						</div>
						<div className='flex gap-x-[7px]'>
							<Phone />
							<Link href='tel:032-443-52-06 ' className='text-[18px]'>
								(03244) 3-52-06
							</Link>
						</div>
						<div className='flex gap-x-[7px]'>
							<Email />
							<Link href='mailto:monudmt@ukr.net' className='text-[18px]'>
								monudmt@ukr.net
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
function setShowed(arg0: (prev: boolean) => boolean) {
	throw new Error('Function not implemented.')
}

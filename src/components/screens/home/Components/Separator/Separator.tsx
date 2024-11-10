import { Lobster } from '@/pages/fontsConfig'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}
const Separator = (props: Props) => {
	return (
		<div className='w-full bg-[#7F3971]'>
			<h1 className={`${Lobster.variable} text-white`}> {props.children}</h1>
		</div>
	)
}

export default Separator

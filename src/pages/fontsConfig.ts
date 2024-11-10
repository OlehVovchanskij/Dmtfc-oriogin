import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import localFont from 'next/font/local'

export const Lobster: NextFontWithVariable = localFont({
	src: './fonts/Lobster-Regular.ttf',
	variable: '--font-Lobster',
})

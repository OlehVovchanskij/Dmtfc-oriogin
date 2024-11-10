import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>DMTFC</title>
				<meta name='viewport' content='width=device-width, initial-scale=2.0' />
			</Head>

			<body className='antialiased'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

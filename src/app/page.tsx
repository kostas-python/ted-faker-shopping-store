import Head from 'next/head'; 
import { Link } from 'react-router-dom';
import RootLayout from './layout';



export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <html className="h-full bg-white">
      <body className="h-full">
      
      

      </body>
      </html>
    </RootLayout>
  );
}

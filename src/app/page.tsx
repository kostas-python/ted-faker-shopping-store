import Head from 'next/head'; 
import RootLayout from './layout';



export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <body className="h-full">


      </body>
      
    </RootLayout>
  );
}

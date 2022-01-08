import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Welcome to Theosofi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://theosofi.com">
            Theosofi!
          </a>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://mcstech.dev?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          MCS DEV
        </a>
      </footer>
    </div>
  )
}

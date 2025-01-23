import Head from 'next/head'

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <header className="bg-gray-900 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <a href="/" className="text-2xl font-bold">My Portfolio</a>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="py-20">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4">I am Fahad warsi, a student of Governor House (GIAIC).</p>
          <h2 className="text-3xl font-bold mt-10">Skills</h2>
          <ul className="mt-4 list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
            <li>Type Script</li>
            <li>Next.Js</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default About

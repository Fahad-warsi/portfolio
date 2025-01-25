import Head from 'next/head'
import Link from 'next/link'

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <header className="bg-gray-900 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <Link href="/" className="text-2xl font-bold">My Portfolio</Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="py-20">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" rows={6} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Contact

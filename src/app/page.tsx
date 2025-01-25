import Head from 'next/head'
import Link from 'next/link'


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
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
        <section className="hero text-center py-20">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-xl">I am Fahad Warsi, a student of Governor house IT program <b>(GIAIC)</b>.</p>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Contact Me</a>
        </section>
        <section className="projects py-20">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold">Project 1: Static Resume Builder</h3>
              <p className="mt-2">
Description: I created a static resume builder using HTML and CSS. This project showcases my personal information, work experience, education, and skills in a clean and professional format.
</p>
Link: <Link href="https://hackathon-resume-builder-opal.vercel.app/" target="_blank" rel="noopener noreferrer"><b>View My Resume</b></Link>.
            </div>
            <div className="project bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold">Project 2:Dynamic and Editable Resume Builder</h3>
              
              <p className="mt-2">Description: Developed a dynamic and editable resume builder using HTML and CSS. 
                This project allows users to create and customize their resumes interactively,
                 showcasing their personal information, work experience, education, and skills.</p>
                 Link:<Link href='https://editable-resume-builder-ybvw-ad5nt3mw0-fahad-warsis-projects.vercel.app/' target="_blank" rel="noopener noreferrer">  <b>View My Resume</b></Link>
            </div>
            <div className="project bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-bold">Project 3: Editable and Shareable Resume Builder</h3>
              <p className="mt-2">Description: Created an editable and shareable resume builder. This project enables users to customize their resumes,
                 share them with anyone, and download them as PDFs for convenience.</p>
                 Link:<Link href='https://hackathon-resume-builder-b6l5.vercel.app/' target="_blank" rel="noopener noreferrer">  <b>View My Resume</b></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

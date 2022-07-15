import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export function Contact() {
  return (
    <main>
      <section className="min-h-screen">
        <h1 className="text-3xl text-center pt-5 leading-10" >Contate-me nas redes sociais abaixo</h1>
        <div className="w-full h-full pt-10 flex flex-col items-center gap-3">
          <a href='https://www.facebook.com/alexandre.medina.9' target='_blank' rel="noopener noreferrer">
          <FaFacebook size={70} className="text-3xl text-blue-500 transition hover:scale-[1.1]" />
          </a>
          <a href='https://github.com/alemedinabjj' target={'_blank'} rel="noopener noreferrer">
          <FaGithub size={70} className="text-3xl text-gray-900 transition hover:scale-[1.1]" />
          </a>
          <a href='https://twitter.com/alemedinabjj' target={'_blank'} rel="noopener noreferrer">
          <FaTwitter size={70} className="text-3xl text-blue-500 transition hover:scale-[1.1]" />
          </a>
          <a href='https://www.linkedin.com/in/alexandre-medina-bjj-b2b-a8b8b8b8/' target={'_blank'} rel="noopener noreferrer">
          <FaLinkedin size={70} className="text-3xl text-blue-900 transition  hover:scale-[1.1]" />
          </a>
        </div>
      </section>
    </main>
  )
}
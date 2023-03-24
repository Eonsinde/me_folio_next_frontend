import Link from 'next/link'
import { AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'


type Props = {}

function Footer({}: Props) {
  return (
    <footer className="py-20 bg-app-dark">
        <div className="app-container text-[#E2E2E2] text-[1.1rem]">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                <h4 className="text-xl">Contact</h4>                
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h3 className="text-white text-[22px] md:text-3xl lg:text-4xl font-semibold tracking-wide underline decoration-2">olasinde.eon@gmail.com</h3>
                    <div className="flex space-x-2 text-center md:text-left">
                        <small className='text-red-600'>*</small>
                        <p>Please send me email only for working purpose</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href='https://www.instagram.com/eon.sinde/' className="text-3xl inline-block" target="_blank">
                        <AiFillInstagram className="text-white" />
                    </Link>
                    <Link href='https://www.linkedin.com/in/jesutise-olasinde-546221181/' className="text-3xl inline-block" target="_blank">
                        <AiFillLinkedin className="text-white" />
                    </Link>
                    <Link href='https://github.com/eonsinde' className="text-3xl inline-block" target="_blank">
                        <AiFillGithub className="text-white" />
                    </Link>
                    <Link href='https://twitter.com/eonsinde' className="text-3xl inline-block" target="_blank">
                        <AiFillTwitterSquare className="text-white" />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
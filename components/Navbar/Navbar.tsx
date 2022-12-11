import Link from 'next/link';
import NavLink, { ILink } from './NavLink';


type Props = {
  links: ILink[] 
}

export default function Navbar({ links }: Props) {
  return (
    <nav className='text-[1.1rem] py-10'>
      <div className="app-container">
        <div className='flex items-center justify-between'>
          <div className="">
            <Link href="/" className="text-white text-2xl font-bold">Eonsinde</Link>
          </div>
          <div className="flex items-center justify-center space-x-10">
            {
              links?.map((link, index) => <NavLink key={index} link={link} count={index+1} />)
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
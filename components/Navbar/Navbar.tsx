import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion"
import cn from 'clsx'
import NavLink, { ILink } from './NavLink';
import styles from "./Navbar.module.css";


type Props = {
  links: ILink[] 
}

export default function Navbar({ links }: Props) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <nav className='text-[1.1rem] py-10'>
      <div className="app-container">
        <div className='flex items-center justify-between'>
          <div className='z-20 basis-full md:basis-auto flex items-center justify-between'>
            <Link href="/" className="text-white text-2xl font-bold">Eonsinde</Link>
            <button onClick={() => setNavOpen(prevState => !prevState)} className={cn(styles.navToggler, navOpen && styles.navOpen, "outline-none")}>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-10">
            {
              links?.map((link, index) => <NavLink key={index} link={link} count={index+1} />)
            }
          </div>

          <AnimatePresence>
            {/* mobile side nav */}
            {navOpen && (
              <div className={cn(styles.mobileNav, "fixed top-0 left-0 z-10 h-screen w-screen overflow-hidden shadow-lg")}> 
                <motion.div 
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 200, opacity: 0 }}
                  className="app-container h-full flex flex-col justify-center space-y-6"
                >
                  {links?.map((link:ILink, index:number) => (
                    <NavLink
                      key={index}
                      link={link}
                      count={index+1}
                      onClick={() => setNavOpen(false)}
                      className="text-[3.2rem] sm:text-[3.7rem] uppercase cursor-pointer font-semibold"
                    />
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
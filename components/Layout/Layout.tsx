import  Navbar from '@components/Navbar'
import { ILink } from '@components/Navbar/NavLink'
import  Footer  from '@components/Footer'


interface Props {
  children?: React.ReactNode
}

// the Layout Wrapper Component
const Layout: React.FC<Props> = ({ children }) => {

  const navLinks : ILink[] = [
    { label: 'Home', href: '/' },
    { label: 'About me', href: '/about' },
    { label: 'Works', href: '/works' },
  ]
  
  return (
    <>
      <Navbar links={navLinks} />
        {children}
      <Footer  />
    </>
  )
}

export default Layout

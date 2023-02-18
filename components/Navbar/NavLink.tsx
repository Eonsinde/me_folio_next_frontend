import Link from 'next/link';

export interface ILink {
  label: String
  href: String
}

type Props = {
  link: ILink
  count: number
  className?: string
  onClick?: any
}

const NavLink = ({ link, count, className, onClick }: Props) => {
  return (
    <Link
      href={`${link.href}`}
      onClick={onClick ? onClick : () => {}}
      className={`flex flex-col space-y-2 items-start md:items-end justify-center ${className ? className : ''}`}
    > 
      <small>0{count}</small>
      <p>{link.label}</p>
    </Link>
  )
}

export default NavLink
import Link from 'next/link';

export interface ILink {
  label: String;
  href: String
}

type Props = {
  link: ILink;
  count: number;
}

const NavLink = ({ link, count }: Props) => {
  return (
    <Link
      href={`${link.href}`}
      className="flex flex-col space-y-2 items-end justify-center"
    > 
      <small>0{count}</small>
      <p>{link.label}</p>
    </Link>
  )
}

export default NavLink
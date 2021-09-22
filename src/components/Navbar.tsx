import { Link } from "react-router-dom"

type NavbarProps = {
  comps: Array<string>
}

export const Navbar = ({ comps }: NavbarProps) => {
  return (
    <div>
      <ul>
        {
          comps && comps.map(comp => <li><Link to={`/comp`}>{comp}</Link></li>)
        }
      </ul>
    </div>
  )
}

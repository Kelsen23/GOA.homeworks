import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blogs">Blogs</Link>
    </nav>
  )
}

export default Nav

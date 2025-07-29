import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/garden">Garden</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

import Logo from './Logo'
import { UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const handleUserClick = () => {
    console.log('Clicked UserIcon!')
  }

  return (
    <nav className="w-full bg-pink-100">
      <div className="mx-auto flex justify-between items-center p-4">
        <Link to="/" >
          <Logo />
        </Link>
          <UserCircle onClick={handleUserClick} className="w-6 h-6 text-gray-700" />
      </div>
    </nav>
  )
}

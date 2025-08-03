import Logo from './Logo'
import { UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import auth from '../../services/keycloak'

export default function Navbar() {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    auth.getUserName().then(name => {
      if (name) setUserName(name)
    })
  }, [])

  const handleUserClick = () => {
    console.log('Clicked UserIcon!');
  }

  return (
      <nav className="w-full bg-pink-100">
        <div className="mx-auto flex justify-between items-center p-4">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleUserClick}>
            <UserCircle className="w-6 h-6 text-gray-700" />
            {userName && <span className="text-sm text-gray-700">{userName}</span>}
          </div>
        </div>
      </nav>
  )
}

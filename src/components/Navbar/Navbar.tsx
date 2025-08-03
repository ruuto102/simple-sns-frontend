import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import auth from '../../services/keycloak'
import UserDropdown from './UserDropdown'

export default function Navbar() {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    auth.getUserName().then(name => {
      if (name) setUserName(name)
    })
  }, [])

  return (
      <nav className="w-full bg-pink-100">
        <div className="mx-auto flex justify-between items-center p-4">
          <Link to="/">
            <Logo />
          </Link>
          <UserDropdown userName={userName} />
        </div>
      </nav>
  )
}

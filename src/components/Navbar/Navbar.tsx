import Logo from './Logo'
import { UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import auth from '../../services/keycloak'

export default function Navbar() {
  const [userName, setUserName] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    auth.getUserName().then(name => {
      if (name) setUserName(name)
    })
  }, [])

  const handleLogout = () => auth.logout()
  const handleLogin = () => auth.login()

  return (
      <nav className="w-full bg-pink-100">
        <div className="mx-auto flex justify-between items-center p-4 relative">
          <Link to="/">
            <Logo />
          </Link>
          <div className="relative">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowMenu(prev => !prev)}
            >
              <UserCircle className="w-6 h-6 text-gray-700" />
              {userName && <span className="text-sm text-gray-700">{userName}</span>}
            </div>
            {showMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow text-sm z-10">
                  {auth.isAuthenticated() ? (
                      <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={handleLogout}
                      >
                        Sign Out
                      </button>
                  ) : (
                      <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={handleLogin}
                      >
                        Sign In
                      </button>
                  )}
                </div>
            )}
          </div>
        </div>
      </nav>
  )
}

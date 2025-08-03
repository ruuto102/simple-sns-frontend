import { useState } from 'react'
import { UserCircle } from 'lucide-react'
import auth from '../../services/keycloak'

export default function UserDropdown({ userName }: { userName: string }) {
    const [showMenu, setShowMenu] = useState(false)

    const handleLogout = () => auth.logout()
    const handleLogin = () => auth.login()

    return (
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
    )
}

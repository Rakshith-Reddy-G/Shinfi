import {useNavigate} from "react-router-dom"

import {
  FiLogOut,
  FiMoon,
  FiSun,
} from "react-icons/fi"

import {removeToken} from "../utils/auth"
import {useTheme} from "../context/ThemeContext"

function ProfileDropdown({close}) {
  const navigate = useNavigate()

  const {darkMode, setDarkMode} =
    useTheme()

  const handleLogout = () => {
    removeToken()
    navigate("/login")
  }

  return (
    <div className="absolute right-0 top-14 w-72 bg-[#faf8f5] dark:bg-[#1b1b1b] border border-[#e7e2db] dark:border-[#2a2a2a] rounded-3xl p-4 shadow-2xl z-50">

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
        className="w-full flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-[#f3f1ed] dark:hover:bg-[#262626] transition"
      >
        <span>
          {darkMode
            ? "Light Mode"
            : "Dark Mode"}
        </span>

        {darkMode ? (
          <FiSun size={20} />
        ) : (
          <FiMoon size={20} />
        )}
      </button>

      <button
        onClick={handleLogout}
        className="w-full mt-3 flex items-center justify-between px-5 py-4 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-[#262626]"
      >
        <span>Logout</span>

        <FiLogOut size={20} />
      </button>
    </div>
  )
}

export default ProfileDropdown
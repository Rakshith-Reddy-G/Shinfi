import {useState} from "react"
import {useNavigate} from "react-router-dom"

import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from "react-icons/fi"

import {setToken} from "../utils/auth"

function Login() {
  const [showPassword, setShowPassword] =
    useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()

    if (
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return
    }

    const fakeToken =
      "shinfi_authenticated_user_token"

    setToken(fakeToken)

    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f5f3ef] dark:bg-[#111111] transition-all">

      <div className="flex items-center justify-center flex-1 px-5 py-16">

        <div className="w-full max-w-md">

          <div className="text-center">

            <img
              src="https://res.cloudinary.com/dogmt95ye/image/upload/v1779129258/Image_13_ec3wq5.png"
              className="w-12 mx-auto"
            />

            <h1 className="text-6xl font-semibold mt-8 dark:text-white">
              shinfi
            </h1>

            <p className="text-[#6b6b6b] dark:text-[#9a9a9a] mt-5 leading-7">
              Experience seamless shopping with a touch of infinite elegance.
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="mt-14 bg-[#faf8f5] dark:bg-[#1b1b1b] border border-[#e7e2db] dark:border-[#2a2a2a] rounded-[32px] p-8"
          >

            <div>
              <label className="font-medium">
                Email Address
              </label>

              <div className="relative mt-3">

                <FiMail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8a8a8a]"
                  size={20}
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={e =>
                    setEmail(e.target.value)
                  }
                  placeholder="name@example.com"
                  className="w-full bg-[#f3f1ed] dark:bg-[#262626] rounded-2xl py-4 pl-14 pr-5 outline-none"
                />
              </div>
            </div>

            <div className="mt-8">

              <div className="flex items-center justify-between">

                <label className="font-medium">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-[#6b6b6b]"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative mt-3">

                <FiLock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8a8a8a]"
                  size={20}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  required
                  value={password}
                  onChange={e =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="w-full bg-[#f3f1ed] dark:bg-[#262626] rounded-2xl py-4 pl-14 pr-14 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8a8a8a]"
                >
                  {showPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-10 bg-[#1f1f1f] hover:opacity-90 text-white py-4 rounded-2xl transition"
            >
              Log In
            </button>

            <div className="flex items-center gap-5 my-8">
              <div className="h-px bg-[#ddd] flex-1" />

              <span className="text-[#8a8a8a]">
                OR
              </span>

              <div className="h-px bg-[#ddd] flex-1" />
            </div>

            <button
              type="button"
              className="w-full border border-[#ddd] py-4 rounded-2xl hover:bg-[#f3f1ed] dark:hover:bg-[#262626]"
            >
              Continue with Google
            </button>

            <p className="text-center mt-8 text-[#6b6b6b]">
              Don't have an account?{" "}

              <span className="font-semibold text-black dark:text-white">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>

      <footer className="border-t border-[#e7e2db] dark:border-[#2a2a2a] py-8 px-10 flex flex-col md:flex-row gap-5 justify-between">

        <div>
          <h2 className="text-3xl font-semibold">
            shinfi
          </h2>

          <p className="mt-2 text-[#6b6b6b]">
            © 2024 shinfi. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-[#6b6b6b]">
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Shipping & Returns</p>
          <p>Contact</p>
        </div>
      </footer>
    </div>
  )
}

export default Login
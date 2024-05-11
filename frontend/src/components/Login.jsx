import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="bg-gray-300 w-full flex h-screen font-Noto">
        <div className="w-[26rem] h-auto border rounded-lg border-slate-300 bg-white mx-auto my-auto shadow-2xl">
          <div className="flex flex-col justify-center mx-10 my-8">
            <img className="w-14 h-14 mx-auto my-4" src="../../src/assets/pintrestlogo.svg" alt="logo" />
            <h1 className="text-center text-3xl">Login to see more</h1>
          </div>
          <form action="" className="flex flex-col justify-center mx-10 my-4">
              <input className="border-2 caret-[#e60023] placeholder:text-base px-3 outline-[#e60023] cursor h-14 mb-3 mt-1 rounded-2xl" type="text" placeholder="Enter Your Email" required/>
              <input className="border-2 caret-[#e60023] placeholder:text-base px-3 outline-[#e60023] cursor h-14 mb-3 mt-1 rounded-2xl" type="password" placeholder="Enter Your Password" required/>
              <input className="mx-auto caret-[#e60023] mt-1 bg-[#e60023] w-full h-12 text-white rounded-3xl text-lg cursor-pointer font-bold tracking-widest" type="submit" value="Login" />
          </form>
          <div className="flex flex-col justify-center mx-10 mt-2 mb-8">
              <Link to="/reset" className="text-center text-sm my-1 text-[#0000ee] underline decoration-[#0000ee]" href="">Forgot your password?</Link>
              <p className="text-center text-xs my-2">By continuing, you agree to Pinterest's <span className="font-semibold">Terms of Service, Privacy policy</span>.</p>
              <Link to="/" className="text-center text-sm my-1 text-[#0000ee] underline decoration-[#0000ee]" href="">Not on Pinterest yet? Sign up</Link>
          </div>
        </div>
    </div>
  )
}

export default Login
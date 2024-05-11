import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="bg-gray-300 w-full flex h-screen overflow-hidden font-Noto">
        <div className="w-[26rem] h-auto border rounded-lg border-slate-300 bg-white mx-auto my-auto shadow-2xl">
          <div className="flex flex-col justify-center mx-16 mt-6 mb-4">
            <img className="w-14 h-14 mx-auto my-4" src="../../src/assets/pintrestlogo.svg" alt="logo" />
            <h1 className="text-center text-3xl">Create Account to see more</h1>
          </div>
          <form action="" className="flex flex-col justify-center mx-16 my-1">
              <input type="email" className="border-2 caret-[#e60023] placeholder:text-sm px-3 outline-[#e60023] cursor h-11 mb-3 mt-1 rounded-2xl" placeholder="Enter Your Email" required/>
              <input className="border-2 caret-[#e60023] placeholder:text-sm px-3 outline-[#e60023] cursor h-11 mb-3 mt-1 rounded-2xl" type="text" placeholder="Enter Your Username" required/>
              <input type="text" className="border-2 caret-[#e60023] placeholder:text-sm px-3 outline-[#e60023] cursor h-11 mb-3 mt-1 rounded-2xl" placeholder="Enter Your FullName" required/>
              <input className="border-2 caret-[#e60023] placeholder:text-sm px-3 outline-[#e60023] cursor h-11 mb-3 mt-1 rounded-2xl" type="password" placeholder="Enter Your Password" required/>
              <input className="mx-auto caret-[#e60023] mt-1 bg-[#e60023] w-full h-10 text-white rounded-3xl text-base cursor-pointer font-medium tracking-wider" type="submit" value="Register" />
          </form>
          <div className="flex flex-col justify-center mx-16 mt-2 mb-8">
              <Link to="/reset" className="text-center text-sm my-1 text-[#0000ee] underline decoration-[#0000ee]" >Forgot your password?</Link>
              <h1 className="text-center text-sm">OR</h1>
              <input className="mx-auto mt-1 bg-[#0980f0] w-full h-10 text-white rounded-3xl text-base cursor-pointer font-medium tracking-wider" type="submit" value="Continue with Facebook" />
              <input className="mx-auto my-3 bg-[#d1d5db] w-full h-10 text-black rounded-3xl text-base cursor-pointer font-medium tracking-wider" type="submit" value="Continue with Google" />
              <p className="text-center text-xs my-2">By continuing, you agree to Pinterest's <span className="font-semibold">Terms of Service, Privacy policy</span>.</p>
              <Link to="/login" className="text-center text-sm my-1 text-[#0000ee] underline decoration-[#0000ee]" >Already have an account? Sign in</Link>
          </div>
        </div>
    </div>
  )
}

export default Register
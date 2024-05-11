import { Link } from "react-router-dom"

const Reset = () => {
  return (
    <div className="bg-gray-300 w-full flex h-screen font-Noto">
        <div className="w-[26rem] h-auto border rounded-lg border-slate-300 bg-white mx-auto my-auto shadow-2xl">
          <div className="flex flex-col justify-center mx-10 my-8">
            <img className="w-14 h-14 mx-auto my-4" src="../../src/assets/pintrestlogo.svg" alt="logo" />
            <h1 className="text-center text-3xl">Reset Your Password</h1>
          </div>
          <form action="" className="flex flex-col justify-center mx-10 my-4">
              <input className="border-2 caret-[#e60023] placeholder:text-sm px-3 outline-[#e60023] cursor h-11 mb-3 mt-1 rounded-2xl" type="text" placeholder="Enter New Password" required/>
              <input className="border-2 caret-[#e60023] placeholder:text-sm px-3 outline-[#e60023] cursor h-11 mb-3 mt-1 rounded-2xl" type="password" placeholder="Conform Password" required/>
              <input className="mx-auto caret-[#e60023] mt-1 bg-[#e60023] w-full h-10 text-white rounded-3xl text-lg cursor-pointer font-medium tracking-wide" type="submit" value="Reset Password" />
          </form>
          <div className="flex flex-col justify-center mx-10 mt-2 mb-8">
              <Link to="/login" className="text-center text-sm my-1 text-[#0000ee] underline decoration-[#0000ee]" href="">Sign in</Link>
          </div>
        </div>
    </div>
  )
}

export default Reset
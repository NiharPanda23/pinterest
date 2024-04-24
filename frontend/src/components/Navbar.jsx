import { GoBellFill } from "react-icons/go";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";




const Navbar = () => {
  return (
    <div className="bg-white">
        <ul className="flex  justify-between mx-4 my-2 text-center">
          <li className="my-2 text-md cursor-pointer">logo</li>
          <li className="my-2 text-md cursor-pointer">Home</li>
          <li className="my-2 text-md cursor-pointer">Explore</li>
          <li className="my-2 text-md cursor-pointer">Create</li>
          <li className=""><input className="w-[90rem] border-none focus:outline-blue-400 focus: bg-gray-200 rounded-3xl px-2 py-2 placeholder:px-2 placeholder:py-2 placeholder:text-sm" type="search" name="" id="" placeholder="Search"/></li>
          <li className="my-3 text-lg cursor-pointer"><GoBellFill /></li>
          <li className="my-3 text-lg cursor-pointer">
            <IoChatbubbleEllipses />
          </li>
          <li className="my-3 text-lg cursor-pointer">
            <FaUser/>
          </li>
          <li className="my-2 text-lg cursor-pointer">
            <MdOutlineKeyboardArrowDown/>
          </li>
        </ul>
    </div>
  )
};

export default Navbar;
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container flex items-center justify-between">
        <div className="text-3xl text-white font-bold tracking-tighter">
          <Link to="/">Booking.com</Link>
        </div>
        <div className="text-blue-800 bg-white py-2 px-3 font-bold cursor-pointer hover:bg-[#eee] duration-300">
          <Link to="/sign-in">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

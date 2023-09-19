import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products/:id", name: "Product Details" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="bg-yellow-200 text-black p-3">
      <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl">
        {
            open===true?
            <AiOutlineClose></AiOutlineClose>
            :
            <AiOutlineMenu></AiOutlineMenu>
        }
        
      </div>
      <ul className={`md:flex duration-1000 md:static absolute ${open?'top-12':'-top-40'} bg-yellow-200 text-black px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

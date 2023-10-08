import { Link } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
     <ul className="menu menu-horizontal px-1">
      <li><Link to="/menu">Our Item</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/order/salad">Order</Link></li>
      
    </ul>
    </>
    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
    </div>
    <a className="btn btn-ghost normal-case text-xl">Cake Zone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    {navOptions}
   
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

            
        </>
    );
};

export default Navbar;
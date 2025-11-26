import Logo from "../../../../Components/Logo";
import Container from "../../../../Components/Container";
import { Link, NavLink } from "react-router";
import UseAuth from "../../../../Hooks/UseAuth";
;

const Navbar = () => {


  const {user, logOut} = UseAuth();

 const HandelLogOut =() => {
  logOut()
  .then()
  .catch(error =>{
    console.log(error);
  })
 }


  const navItems = [
    { to: "/services", label: "Services" },
    { to: "/coverage", label: "Coverage" },
    { to: "/aboutus", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
    { to: "/bearider", label: "Be a Rider" },
    { to: "/send-parcle", label: "Send Parcl" },
     ...(user ? [{ to: "dashboard/my-parcles", label: "My Parcel" }] : []),
  ];

  
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "bg-primary text-white font-semibold rounded-lg px-4 py-2"   
      : "text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg px-4 py-2 transition-all";

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">

          {/* Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 shadow z-10 p-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} className={navLinkClasses}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-16 md:w-20 xl:w-25">
                <Link to="/" ><Logo /></Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-0 px-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={navLinkClasses}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Button */}
          <div className="navbar-end">
            {
              user? <Link onClick={HandelLogOut} to="login" className="btn btn-primary hover:bg-accent">LogOut</Link> : 
              <Link to="login" className="btn btn-primary hover:bg-accent">Login</Link>
            }
            <Link to="/bearider" className="btn btn-secondary hover:text-white hover:bg-accent text-accent mx-4">Be a Rider</Link>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Navbar;
import { useState, createContext } from "react";
import NavLinks from "./NavLinks";
import { useContext } from "react";
// import { NavbarContext } from "./Navbar";

export const NavbarContext = createContext();

//custon hook

export const useAppContext = () => useContext(NavbarContext);

// console.log(NavbarContext.);

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context api</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;

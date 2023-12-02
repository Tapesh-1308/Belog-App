import { Container, Logo, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow border-b-[1px] border-[#34383A] text-white">
      <Container>
        <nav className="flex items-center justify-between relative">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>


          {/* Hamburger icon for small screens */}
          <div className="sm:hidden">
            <button
              onClick={()=>  setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Menu for small screens */}
          <ul
            className={`flex flex-col sm:flex-row ml-auto ${
              isMenuOpen ? "flex absolute top-12 right-12 bg-[#131516] border border-gray-500 rounded-md z-50" : "hidden"
            } sm:flex`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <NavLink
                      to={item.slug}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-6 py-2 duration-200 text-[#a49d91] hover:text-white ${
                          isActive && "text-[#fff]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </header>
  );
}

export default Header;

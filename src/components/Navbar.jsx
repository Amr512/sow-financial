import { useState } from "react";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="lg:flex justify-between items-center hidden">
        <div>
          <img src="/src/assets/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex justify-between gap-[52px]">
            <li className="text-[#949494] font-[600]">Ecosystem</li>
            <li className="font-[600]">Invest</li>
            <li className="text-[#949494] font-[600]">Docs</li>
            <li className="text-[#949494] font-[600]">Contact</li>
          </ul>
        </div>
        <div>
          <button className="flex items-center gap-[10px] px-[25px] py-[15px] bg-[#821DFE] rounded-[7px] font-[600] uppercase">
            <img src="/src/assets/Vector.png" alt="icon" />
            Connect a wallet
          </button>
        </div>
      </div>

      <div>
        <nav>
          <section className="MOBILE-MENU flex justify-between items-center lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
            <div>
              <button className="flex text-[10px] items-center gap-[10px] px-[12px] py-[10px] bg-[#821DFE] rounded-[7px] font-[600] uppercase">
                <img src="/src/assets/Vector.png" alt="icon" className="w-[10px] h-[8px]"/>
                Connect a wallet
              </button>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="uppercase">
                  Ecosystem
                </li>
                <li className="uppercase">
                  Invest
                </li>
                <li className="uppercase">
                  Docs
                </li>
                <li className="uppercase">
                  Contact
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #821DFE;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
};

export default Navbar;

import { useState } from 'react';
import logo from './../assets/logo.svg';
import mobileNavBgPatter from './../assets/bg-pattern-mobile-nav.svg';

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full flex flex-row items-center justify-between 
                       px-[9.5rem] py-[19px] relative z-10 max-lg:px-8">
      <img src={logo} alt='Brand logo'></img>
      <nav>
        <div className="block lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-[3px] rounded-md 
                     text-gray-400 hover:text-white hover:bg-gray-[#2b272f] 
                     focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            {showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" stroke="#2C2830" strokeWidth="1.5" d="M.75.75h30.5v30.5H.75z" />
                  <g fill="#2C2830">
                    <path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z" />
                    <path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z" />
                  </g>
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" stroke="#2C2830" strokeWidth="1.5" d="M.75.75h30.5v30.5H.75z" />
                  <g fill="#2C2830">
                    <path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z" />
                  </g>
                </g>
              </svg>
            )}
          </button>
        </div>
        <ul className="inline-flex items-center gap-7 uppercase max-lg:hidden">
          <li className='text-gray-500 font-semibold hover:text-[#2b272f] tracking-wider transition-all'>
            <a href="#" aria-label="How We Work">how We Work</a>
          </li>
          <li className='text-gray-500 font-semibold hover:text-[#2b272f] tracking-wider transition-all'>
            <a href="#" aria-label="Blog">Blog</a>
          </li>
          <li className='text-gray-500 font-semibold hover:text-[#2b272f] tracking-wider transition-all'>
            <a href="#" aria-label="Account">Account</a>
          </li>
          <li className='border border-[#2b272f] px-8 py-3 font-semibold tracking-wider
                         cursor-pointer hover:bg-[#2b272f] hover:text-white transition-all'>
            <a href="#" aria-label="View Plans">View Plans</a>
          </li>
        </ul>
        
        {showMenu && (
          <ul className="absolute left-0 top-[4.8rem] z-50 w-full bg-[#2b272f] 
                         flex flex-col items-center gap-12 pt-12 uppercase
                         min-h-screen justify-start text-lg transition-all duration-300 ease-in-out"
              style={{
                  backgroundImage: `url(${mobileNavBgPatter})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right bottom',
                  backgroundSize: 'contain'
              }}>
            <li className='text-white font-semibold hover:text-[#c7b9d8] tracking-wider transition-all'>
              <a href="#" aria-label="How We Work">how We Work</a>
            </li>
            <li className='text-white font-semibold hover:text-[#c7b9d8] tracking-wider transition-all'>
              <a href="#" aria-label="Blog">Blog</a>
            </li>
            <li className='text-white font-semibold hover:text-[#c7b9d8] tracking-wider transition-all'>
              <a href="#" aria-label="Account">Account</a>
            </li>
            <li className='border border-white text-white text-center w-5/6 px-8 py-4 font-semibold tracking-wider
                         cursor-pointer hover:bg-white hover:text-[#2b272f] transition-all'>
              <a href="#" aria-label="View Plans">View Plans</a>
            </li>
          </ul>
        )}
      </nav>

    </header>
  );
}
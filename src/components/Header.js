import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
// import logoIcon from '../assets/icons/sh_logo2.svg';
import menuIcon from '../assets/icons/square.svg';
import closeIcon from '../assets/icons/close.svg';
import Resume from '../assets/files/Emmanuel Resume.pdf';

const Header = () => {
  const [menuTab, setMenuTab] = useState('hidden');

  const handleMenuDisplay = () => {
    setMenuTab('flex');
  };

  const handleClose = () => {
    setMenuTab('hidden');
  };

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  useEffect(() => {
    const navLinks = document.querySelector('#nav-links');
    // const menuNavLinks = document.querySelector('#menu-nav-links');
    document.addEventListener('click', (e) => {
      if (e.target.parentNode.id === 'nav-link') {
        navLinks.childNodes.forEach((ele) => {
          if (ele.classList.contains('bottom-border') && e.target.parentNode !== ele) {
            ele.classList.remove('bottom-border');
          } else {
            e.target.parentNode.classList.add('bottom-border');
          }
        });
      }
      if (e.target.parentNode.id === 'menu-nav-link' && menuTab !== 'hidden') {
        setMenuTab('hidden');
      }
    });
  }, [menuTab]);

  return (
    <div className="" id="home">
      <header className="bg-navy px-5 fixed top-0 left-0 right-0 z-30">
        <nav className="flex justify-between items-center">
          <div>
            <a href="/" id="nav-link">
              {/* <img className="wow bounceInDown" src={logoIcon} alt="EM" /> */}
            </a>
          </div>
          <div className="wow fadeInDown hidden md:block">
            <ul className="flex gap-5 items-center text-white" id="nav-links">
              <li className="p-2" id="nav-link">
                <a href="#about" className="focus:text-green hover:text-green">About</a>
              </li>
              <li className="p-2" id="nav-link">
                <a href="#work" className="focus:text-green hover:text-green">Work</a>
              </li>
              <li className="p-2" id="nav-link">
                <a href="#contact" className="focus:text-green hover:text-green">Contact</a>
              </li>
              <li className="border p-2 border-green hover:bg-slate-700" id="nav-link">
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="test"
                  className="text-green"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="wow bounceInRight md:hidden">
            <button type="button" onClick={handleMenuDisplay}>
              <img src={menuIcon} alt="Menu" />
            </button>
          </div>
        </nav>
      </header>
      <section className={`${menuTab} bg-navy fixed top-0 left-0 right-0 w-full h-full z-50`}>
        <nav className="flex flex-col gap-12 w-full p-20">
          <div className="flex justify-end">
            <button className="wow rollIn" type="button" onClick={handleClose}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <ul className="flex flex-col gap-5 items-center text-white text-2xl" id="menu-nav-links">
            <li className="wow bounceInLeft p-2" id="menu-nav-link">
              <a href="#home" className="focus:text-green hover:text-green">Home</a>
            </li>
            <li className="wow bounceInRight p-2" id="menu-nav-link">
              <a href="#about" className="focus:text-green hover:text-green">About</a>
            </li>
            <li className="wow bounceInLeft p-2" id="menu-nav-link">
              <a href="#work" className="focus:text-green hover:text-green">Work</a>
            </li>
            <li className="wow bounceInRight p-2" id="menu-nav-link">
              <a href="#contact" className="focus:text-green hover:text-green">Contact</a>
            </li>
            <li className="wow bounceInLeft border p-2 border-green hover:bg-slate-700" id="menu-nav-link">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                download="test"
                className="text-green"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Header;

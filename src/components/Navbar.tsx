import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import Logo from "../images/logo.png";
import WhiteLogo from "../images/logowhite.png";
import Menu from "../images/menu.svg";
import useOutsiderAlert from "../hooks/useOutsideAlert";
import { gsap } from "gsap";
import useScrollPosition from "../hooks/useScrollPosition";
import {
  councilChildren,
  eventsChildren,
  moreChildren,
} from "../constants/menuChildrenData";

interface LinkButton {
  type: string;
  children: React.ReactNode;
  href?: string;
  subLinks?: Children[];
  menuIndex: number;
  activateSubMenu: (
    e: React.MouseEvent<HTMLElement | MouseEvent>,
    menuIndex: number
  ) => void;
  deactivateSubMenu: () => void;
}
interface Children {
  name: string;
  href: string;
}
interface Link {
  parent: string;
  children?: Array<Children | null>;
  menuIndex: number;
  href?: string;
}

function LinkButton(props: LinkButton) {
  const { type, children, href = "#", activateSubMenu, menuIndex } = props;

  if (type === "BUTTON") {
    return (
      <>
        <a
          href={href}
          onMouseEnter={(e) => {
            activateSubMenu(e, menuIndex);
          }}
          onMouseLeave={props.deactivateSubMenu}
        >
          {children}
        </a>
      </>
    );
  }
  return <a href={href}>{children}</a>;
}

const updatedLinks: Link[] = [
  { parent: "Home", menuIndex: 0, href: "/" },
  { parent: "Office Bearers", menuIndex: 1, href: "/office-bearers/" },
  {
    parent: "Councils",
    children: councilChildren,
    menuIndex: 2,
    href: "/councils/general",
  },
  {
    parent: "Events",
    children: eventsChildren,
    menuIndex: 3,
    href: "/events/elan",
  },
  { parent: "Clubs", menuIndex: 4, href: "/special-clubs" },
  { parent: "Student's Guide", menuIndex: 5, href: "/freshers-guide" },
  { parent: "Faculties", menuIndex: 6, href: "/faculties" },
  { parent: "Feedback", menuIndex: 7, href: "/feedback" },
  { parent: "More", children: moreChildren, menuIndex: 8, href: "/more" },
];

export function Button(props: { children: string }) {
  return (
    <button className="px-4 py-2 w-[12rem] text-xl border-black rounded-lg active:bg-slate-200">
      {props.children}
    </button>
  );
}

function MobileNavbar({ blackOn, disableAnimation }) {
  const [active, setActive] = useState<boolean>(false);
  const scrollRef = useRef(0);
  const prevScroll = useRef(0);
  const mobileMenuRef = useRef();
  const mobileNavbar = useRef<any>(null);
  const scrollPosition = useScrollPosition();

  const activateMobileMenu = () => {
    setActive(true);
  };

  const deActivateMobileMenu = () => {
    gsap.to(mobileMenuRef.current, {
      autoAlpha: 0,
      duration: 0.2,
      onComplete: () => {
        setActive(false);
      },
    });
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
      gsap.from(mobileMenuRef.current, { autoAlpha: 0, stagger: 0.1 });
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  const getPosition = () => {
    return window.scrollY;
  };

  useEffect(() => {
    function handleScroll() {
      scrollRef.current = getPosition();
      if (scrollRef.current <= prevScroll.current) {
        gsap.to(mobileNavbar.current, {
          y: "0%",
        });
      }
      if (scrollRef.current > prevScroll.current) {
        gsap.to(mobileNavbar.current, {
          y: "-100%",
        });
      }
      prevScroll.current = scrollRef.current;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > 50;
  const showSolid = blackOn || disableAnimation || isScrolled;

  return (
    <>
      <nav
        ref={mobileNavbar}
        className={`flex justify-between px-4 py-2 w-full z-40 lg:hidden fixed transition-colors duration-300 ease-in-out ${showSolid ? "bg-black text-white" : "bg-transparent text-white"
          }`}
      >
        <div>
          <a href="/">
            <div className="h-[5rem] w-[5rem] relative">
              <img
                src={WhiteLogo}
                alt="gymkhana logo"
                className="h-[5rem] w-[5rem]"
              />
            </div>
          </a>
        </div>
        <button
          className="pr-2"
          onClick={() => {
            activateMobileMenu();
          }}
        >
          <img src={Menu} alt="menu" />
        </button>
      </nav>
      {active && (
        <div
          ref={mobileMenuRef}
          className="mobileMenu fixed z-40 w-full h-full "
        >
          <div className="fixed right-5 top-5 text-lg">
            <button onClick={deActivateMobileMenu}>Close</button>
          </div>
          <ul className="bg-white text-center pb-6 h-full flex-grow flex flex-col justify-center items-center">
            {updatedLinks.map((el) => (
              <li key={el.parent} className="pt-3 menu-items">
                <a href={el.href}>
                  <Button>{el.parent}</Button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function MainNavbar({ blackOn, disableAnimation }) {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const buttonRef = useRef<any>();
  const subMenuRef = useRef<any>();
  const navRef = useRef<any>();
  const timeoutRef = useRef<any>(null);

  const activateSubMenu = (
    e: React.MouseEvent<HTMLElement | MouseEvent>,
    menuIndex: number
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubMenu((prevMenuIndex) => {
      return prevMenuIndex === menuIndex ? null : menuIndex;
    });
    buttonRef.current = e;
    setTop(buttonRef.current.target.offsetTop);
    setLeft(buttonRef.current.target.offsetLeft);
  };

  const deactivateSubMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 100);
  };

  useOutsiderAlert(subMenuRef, () => {
    setActiveSubMenu(null);
  });

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;
  const showSolid = blackOn || disableAnimation || isScrolled;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed justify-between px-4 py-2 w-full z-40 hidden lg:flex lg:items-center lg:flex-row transition-colors duration-300 ease-in-out ${showSolid ? "bg-black text-white" : "bg-transparent text-white"
          }`}
      >
        <div className="inline-block">
          <a href="/">
            <div className="h-[4rem] w-[4rem] relative ">
              <img
                src={WhiteLogo}
                alt="gymkhana logo"
                className="object-contain h-full w-full"
              />
            </div>
          </a>
        </div>
        <div className="inline-block">
          <ul className="flex gap-9 pr-10 text-lg">
            {updatedLinks.map((el) => (
              <li key={el.parent}>
                <LinkButton
                  subLinks={el?.children}
                  menuIndex={el.menuIndex}
                  activateSubMenu={activateSubMenu}
                  deactivateSubMenu={deactivateSubMenu}
                  type={el.children ? "BUTTON" : "ANCHOR"}
                  href={el?.href}
                >
                  {el.parent}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {activeSubMenu && (
        <div
          ref={subMenuRef}
          className="bg-white text-black inline-block fixed z-40 rounded-lg"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={deactivateSubMenu}
          style={{
            left: activeSubMenu !== 6 ? left : left - 165,
            top: top + 60,
          }}
        >
          <ul className="text-md">
            {updatedLinks[activeSubMenu].children.map((el) => (
              <a href={el.href} key={el.href} className="hover:bg-slate-300">
                <li className="pl-3 pr-5 py-2 hover:bg-slate-100 transition-all">
                  {el.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function Navbar({ blackOn = true, disableAnimation = true }) {
  return (
    <>
      <MobileNavbar blackOn={blackOn} disableAnimation={disableAnimation} />
      <MainNavbar blackOn={blackOn} disableAnimation={disableAnimation} />
    </>
  );
}

export default Navbar;

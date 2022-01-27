import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "../variables.css";
import "../media.css";

export default function Header() {
  const [isBlockOuterList, setIsBBlock] = useState(true);
  const [isBlockInnerList1, setInnerBlock1] = useState(true);
  const [isBlockInnerList2, setInnerBlock2] = useState(true);
  const [isBlockInnerList3, setInnerBlock3] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [arrowIsClicked1, setIsClicked1] = useState(true);
  const [arrowIsClicked2, setIsClicked2] = useState(true);
  const [arrowIsClicked3, setIsClicked3] = useState(true);

  function changeArrow1() {
    setIsClicked1((prevState) => !prevState);
  }
  function changeArrow2() {
    setIsClicked2((prevState) => !prevState);
  }
  function changeArrow3() {
    setIsClicked3((prevState) => !prevState);
  }

  return (
    <header>
      <div className='header'>
        <div className='logo'>
          <img src='./images/logo.svg' alt='logo' />
        </div>
        <div className='nav'>
          <div
            className='button--hamburger'
            onClick={() => setIsBBlock(!isBlockOuterList)}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <ul className={isBlockOuterList ? "nav--list--none" : "nav--list"}>
            <li onClick={changeArrow1}>
              <a
                href='#'
                className='outer--list'
                onClick={() => setInnerBlock1(!isBlockInnerList1)}
              >
                Product
                <span
                  className={arrowIsClicked1 ? "arrow-span" : "arrow-clicked"}
                ></span>
              </a>
              <ul
                className={
                  isBlockInnerList1 ? "inner-list" : "inner-list-block"
                }
              >
                <li>
                  <a href='#'>Overview</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Marketplace</a>
                </li>
                <li>
                  <a href='#'>Features</a>
                </li>
                <li>
                  <a href='#'>Intergrations</a>
                </li>
              </ul>
            </li>
            <li className='second-outerlist' onClick={changeArrow2}>
              <a
                href='#'
                className='outer--list'
                onClick={() => setInnerBlock2(!isBlockInnerList2)}
              >
                Company
                <span
                  className={arrowIsClicked2 ? "arrow-span" : "arrow-clicked"}
                ></span>
              </a>
              <ul
                className={
                  isBlockInnerList2 ? "inner-list" : "inner-list-block"
                }
              >
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Team</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
              </ul>
            </li>
            <li className='third-outerlist' onClick={changeArrow3}>
              <a
                href='#'
                className='outer--list'
                onClick={() => setInnerBlock3(!isBlockInnerList3)}
              >
                Connect
                <span
                  className={arrowIsClicked3 ? "arrow-span" : "arrow-clicked"}
                ></span>
              </a>
              <ul
                className={
                  isBlockInnerList3 ? "inner-list" : "inner-list-block"
                }
              >
                <li>
                  <a href='#'>Contact</a>
                </li>
                <li>
                  <a href='#'>Newsletter</a>
                </li>
                <li>
                  <a href='#'>LinkedIn</a>
                </li>
              </ul>
            </li>
            <hr />
            <li className='log_in_link'>
              <a href='#'>Login</a>
            </li>
            <li className='signup-button-list-item'>
              <a href='#' className='header--signup--button'>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='intro'>
        <div className='intro--title'>
          <h1 className='intro-heading'>
            A modern <br /> publishing platform
          </h1>
          <p className='intro-paragraph'>
            Grow your audience and build your <br />
            online brand
          </p>
        </div>
        <div className='intro--buttons'>
          <button className='intro-button first-intro-button'>
            Start for Free
          </button>
          <button className='intro-button second-intro-button'>
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import "../variables.css";
import "../media.css";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='logo-footer'>
          <img src='./images/logo.svg' alt='logo' />
        </div>
        <div className='first-list listfooter'>
          <h3>Product</h3>
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
        </div>
        <div className='second-list listfooter'>
          <h3>Company</h3>
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
          <li></li>
        </div>
        <div className='third-list listfooter'>
          <h3>Connect</h3>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Newsletter</a>
          </li>
          <li>
            <a href='#'>LinkedIn</a>
          </li>
          <li></li>
        </div>
      </div>
    </div>
  );
}

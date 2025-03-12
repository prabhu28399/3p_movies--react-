import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white py-10">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🎬 3P Movies
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Your go-to destination for the latest and greatest movies across
            various genres and languages. Enjoy high-quality content and stay
            updated!
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="text-gray-400 text-sm mt-2">
            ECIL <br />
            North Kamalanagar, Hyderabad <br />
            Telangana, PIN 500062, India
          </p>
          <p className="text-gray-400 mt-2 text-sm">support@3pmovies.com</p>
          <p className="text-gray-400 mt-1 text-sm">+91 - 9505171479</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Genres
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social Links */}
        <div>
          <h3 className="font-semibold text-lg">Stay Updated</h3>
          <div className="mt-2 flex items-center border-b border-gray-500 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm text-gray-400 outline-none flex-1 placeholder-gray-500"
            />
            <button className="text-gray-400 hover:text-white">➜</button>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/prabhu_unofficial_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/prabhu-parshaka/"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} 3P Movies - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSeedling,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const link1 = (
    <>
      <li className="hover:text-orange-500 transition cursor-pointer">
        <Link to="how-it-works" smooth={true} duration={100}>
          How It Works
        </Link>
      </li>
      <li className="hover:text-orange-500 transition cursor-pointer">
        <Link to="pricing" smooth={true} duration={100}>
         Pricing
        </Link>
      </li>
      <li className="hover:text-orange-500 transition cursor-pointer">
        <Link to="faq" smooth={true} duration={100}>
         FAQs
        </Link>
      </li>
      <li className="hover:text-orange-500 transition cursor-pointer">
        <Link to="" smooth={true} duration={100}>
         Contact
        </Link>
      </li>
    </>
  );
  return (
    <footer className="bg-[#111827] text-white p-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand info */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center text-primary text-2xl gap-2">
              {" "}
              <FaSeedling />
              <h1 className=" font-bold text-primary mb-2">AluPost</h1>
            </div>
            <p className="max-w-xs">
              Spreading potato-powered joy and confusion across Bangladesh, one
              alu at a time.
            </p>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {link1}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Support</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Track Your Alu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow the Madness</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            © 2024 AluPost. All rights reserved. Potatoes delivered with love
            and mystery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

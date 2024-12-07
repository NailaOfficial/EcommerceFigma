import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Social icons
import { faCopyright, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'; // For solid icons
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-neutral-900">
      <div className="w-full sm:h-full lg:h-[350px] bg-neutral-900 flex justify-center items-center">
        <div className="w-full gap-y-9 pt-3 sm:pb-6 flex sm:flex-col lg:flex-row justify-evenly text-white px-4 sm:px-0">
          
          {/* Exclusive Section */}
          <div className="w-full sm:w-[200px] md:w-[250px]">
            <h1 className="font-bold text-xl mb-4">EXCLUSIVE</h1>
            <ul>
              <li className="font-bold pt-2 cursor-pointer">Subscribe</li>
              <li className="pt-2 cursor-pointer">Get 10% off your first order</li>
              <li className="mt-3 cursor-pointer py-1 border flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="bg-neutral-900 border-none text-white py-1 px-2 w-full"
                />
                <FontAwesomeIcon
                  icon={faArrowCircleRight}  // Using straight arrow icon
                  className="text-xl sm:hidden md:block text-white ml-2 cursor-pointer"
                />
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-[200px] md:w-[250px]">
            <h1 className="font-bold text-xl mb-4">Support</h1>
            <ul>
              <li className="pt-1 cursor-pointer">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
              <li className="pt-1 cursor-pointer">+88015-88888-9999</li>
            </ul>
          </div>

          {/* Download App Section with QR code on left */}
          <div className="w-full sm:w-[200px] md:w-[250px] flex flex-col items-center">
            <h1 className="font-bold text-xl mb-4">Download App</h1>
            <ul>
              <li className="pt-2 cursor-pointer">Save 43% with app (New Users Only)</li>
              <div className="flex justify-center items-center mt-4 gap-x-8">
                {/* Left side: QR Code */}
                <div className="flex flex-col items-center">
                  <img src="/qr.png" alt="QR Code" className="w-[100px] mb-2" />
                </div>
                {/* Right side: G1 and G2 Images (Google Play & Apple Play Store) */}
                <div className="flex flex-col items-center">
                  <img src="/g1.png" alt="Google Play" className="w-[150px] mb-4 border" />
                  <img src="/g2.png" alt="Apple Play Store" className="w-[150px] border" />
                </div>
              </div>
              {/* Social Media Links below QR section */}
              <ul className="list-none flex gap-x-3 justify-center mt-4">
                <li>
                  <Link href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} className="text-3xl transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} className="text-3xl transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com">
                    <FontAwesomeIcon icon={faYoutube} className="text-3xl transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} className="text-3xl transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white text-center text-sm pb-4">
        <FontAwesomeIcon icon={faCopyright} className="text-lg mr-3" /> Copyright Rimel 2022. All rights reserved
      </p>
    </main>
  );
}

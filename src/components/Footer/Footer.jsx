import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="font-workSans">
      <hr className=" border-blue-gray-50" />
      <footer className=" flex flex-row w-full bg-white p-4 shadow-xl items-center justify-between">
        <div>
          <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            © {currentYear} Scizers Technologies LLP | Developed by Md. Monir Uddin
          </p>
        </div>
        <div className="flex flex-row gap-6 text-xl">
          <button>
            <Link to="https://www.facebook.com/mits005" target="_blank">
            <FaFacebook></FaFacebook>
            </Link>
          </button>
          <button>
            <Link to="https://twitter.com/moniru005" target="_blank">
            <FaTwitter></FaTwitter>
            </Link>
          </button>
          <button>
            <Link to="https://www.linkedin.com/in/moniru005" target="_blank">
              <FaLinkedin></FaLinkedin>
            </Link>
          </button>
          <button>
            <FaInstagram></FaInstagram>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

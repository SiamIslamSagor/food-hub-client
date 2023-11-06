import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import footerBgImg from "../../assets/images/footerBg1.png";

const WebFooter = () => {
  const footerBgStyle = {
    backgroundImage: `url(${footerBgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Footer bgDark>
      <div className="w-full border-4">
        <div style={footerBgStyle}>
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 container mx-auto  md:h-[470px] pt-64 lg:pt-72 text-white ">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="/error">About</Footer.Link>
                <Footer.Link href="/error">Careers</Footer.Link>
                <Footer.Link href="/error">Success</Footer.Link>
                <Footer.Link href="/error">Mission</Footer.Link>
                <Footer.Link href="/error">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="/error">Discord Server</Footer.Link>
                <Footer.Link href="/error">Twitter</Footer.Link>
                <Footer.Link href="/error">Facebook</Footer.Link>
                <Footer.Link href="/error">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/error">Privacy Policy</Footer.Link>
                <Footer.Link href="/error">Licensing</Footer.Link>
                <Footer.Link href="/error">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="/error">Name: Md. Rahman</Footer.Link>
                <Footer.Link href="/error">
                  Address: House #12, Road #34
                </Footer.Link>
                <Footer.Link href="/error">City: Dhaka</Footer.Link>
                <Footer.Link href="/error">Post Code: 1207</Footer.Link>
                <Footer.Link href="/error">Email: rahman@gmail.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-700">
          <div className=" container mx-auto  text-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="/error"
              by=" FOODHUB. All Rights Reserved."
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="/error" icon={BsFacebook} />
              <Footer.Icon href="/error" icon={BsInstagram} />
              <Footer.Icon href="/error" icon={BsTwitter} />
              <Footer.Icon href="/error" icon={BsGithub} />
              <Footer.Icon href="/error" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default WebFooter;

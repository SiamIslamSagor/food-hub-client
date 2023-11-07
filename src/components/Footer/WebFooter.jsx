import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import footerBgImg from "../../assets/images/footerBg1.png";
import GooTop from "../GooTop/GooTop";

const WebFooter = () => {
  const footerBgStyle = {
    backgroundImage: `url(${footerBgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Footer bgDark>
      <div className="w-full bg-white">
        <div style={footerBgStyle} className="relative">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 container mx-auto  md:h-[470px] pt-64 lg:pt-72 text-white ">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="/error">
                  About
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Careers
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Success
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Mission
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="/error">
                  Discord Server
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Twitter
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Facebook
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="/error">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Licensing
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="/error">
                  Name: Md. Rahman
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Address: House #12, Road #34
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  City: Dhaka
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Post Code: 1207
                </Footer.Link>
                <Footer.Link className="text-white" href="/error">
                  Email: rahman@gmail.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>

          <div className="absolute w-full text-right top-20 right-6 sm:right-20 lg:right-28">
            <GooTop></GooTop>
          </div>
        </div>
        <div className="w-full bg-gray-700">
          <div className=" container mx-auto  text-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className="text-white"
              href="/error"
              by=" FOODHUB. All Rights Reserved."
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                className="text-white"
                href="/error"
                icon={BsFacebook}
              />
              <Footer.Icon
                className="text-white"
                href="/error"
                icon={BsInstagram}
              />
              <Footer.Icon
                className="text-white"
                href="/error"
                icon={BsTwitter}
              />
              <Footer.Icon
                className="text-white"
                href="/error"
                icon={BsGithub}
              />
              <Footer.Icon
                className="text-white"
                href="/error"
                icon={BsDribbble}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default WebFooter;

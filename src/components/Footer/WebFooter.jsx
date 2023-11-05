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
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Success</Footer.Link>
                <Footer.Link href="#">Mission</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Name: Md. Rahman</Footer.Link>
                <Footer.Link href="#">Address: House #12, Road #34</Footer.Link>
                <Footer.Link href="#">City: Dhaka</Footer.Link>
                <Footer.Link href="#">Post Code: 1207</Footer.Link>
                <Footer.Link href="#">Email: rahman@gmail.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-700">
          <div className=" container mx-auto  text-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by=" FOODHUB. All Rights Reserved."
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default WebFooter;

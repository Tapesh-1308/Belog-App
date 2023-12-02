import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10  border-t-[1px] border-t-[#34383A] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-slate-300">
                  &copy; Copyright 2023. All Rights Reserved by Tapesh Dua.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-sm font-bold uppercase text-slate-200 ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-sm font-bold uppercase text-slate-200 ">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-sm font-bold uppercase text-slate-200 ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-[#b5b1ac] hover:text-[#938f8a]"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

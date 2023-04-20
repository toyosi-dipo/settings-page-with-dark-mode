import Image from "next/image";
import { useState } from "react";
import {
  ActivityIcon,
  FolderIcon,
  HomeIcon,
  LogoutIcon,
  MoneyReceiveIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "../assets/icons";
import NavLink from "./NavLink";

function Nav() {
  const [activeSettingsTab, setActiveSettingsTab] = useState(6);

  return (
    <nav className="dark-bg-2 dark-bdr border-b border-b-gray-200 bg-white px-5 py-2 lg:min-h-screen lg:border-b-0 lg:border-r-2 lg:border-r-gray-200 lg:pb-20 lg:pl-10 lg:pr-6 lg:pt-10">
      {/* nav container */}
      <div className="flex items-center justify-between lg:h-full lg:max-h-[65rem] lg:flex-col lg:items-start">
        {/* nav content */}
        <div className="">
          {/* logo container */}
          <div className="dark-bdr flex items-center justify-center lg:w-full lg:border-b-2 lg:border-b-gray-300 lg:pb-8 ">
            <Image src="/images/logo.png" width={62} height={62} alt="logo" />
          </div>

          {/* content */}
          <ul className="mt-8 hidden flex-col items-start gap-6  lg:flex">
            <NavLink
              icon={<HomeIcon />}
              title="Home"
              index={1}
              setActiveSettingsTab={setActiveSettingsTab}
              activeSettingsTab={activeSettingsTab}
            />
            <NavLink
              icon={<ActivityIcon />}
              title="Investment"
              index={2}
              setActiveSettingsTab={setActiveSettingsTab}
              activeSettingsTab={activeSettingsTab}
            />
            <NavLink
              icon={<ActivityIcon />}
              title="Dashboard"
              index={3}
              setActiveSettingsTab={setActiveSettingsTab}
              activeSettingsTab={activeSettingsTab}
            />
            <NavLink
              icon={<FolderIcon />}
              title="Files"
              index={4}
              setActiveSettingsTab={setActiveSettingsTab}
              activeSettingsTab={activeSettingsTab}
            />
            <NavLink
              icon={<MoneyReceiveIcon />}
              title="Funds"
              index={5}
              setActiveSettingsTab={setActiveSettingsTab}
              activeSettingsTab={activeSettingsTab}
            />
            <NavLink
              icon={<SettingsIcon />}
              title="Settings"
              index={6}
              setActiveSettingsTab={setActiveSettingsTab}
              activeSettingsTab={activeSettingsTab}
            />
          </ul>
        </div>

        <div className="hidden flex-col items-start gap-6 lg:flex">
          <div className="px-5 py-3">
            <div className="dark-bg-1 flex space-x-4 rounded-full bg-gray-200 p-1">
              <div className="dark-bg-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-700 dark:text-secondary">
                <SunIcon />
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-transparent text-gray-500 dark:text-tertiary">
                <MoonIcon />
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-3 text-[#FA2318]">
            <LogoutIcon /> Logout
          </button>
        </div>

        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className="hamburger block lg:hidden"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;

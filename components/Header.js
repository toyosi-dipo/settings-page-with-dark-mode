import { useState } from "react";
import { NotificationIcon, SearchIcon, VDotsIcon } from "../assets/icons";
import SingleHeading from "../components/SingleHeading";

function Header() {
  const [activeHeadingTab, setActiveHeadingTab] = useState(1);

  return (
    <header className="dark-bdr dark-bg-2 border-b border-b-gray-200 bg-white ">
      <div className="max-w-[2500px]">
        {/* heading */}
        <div className="dark-bdr flex items-center justify-between border-b border-b-gray-200 px-5 py-2 lg:border-none lg:px-15 lg:py-0 lg:pb-3 lg:pt-10">
          {/* flex item 1 */}
          <h1 className="text-2xl lg:text-4xl">Settings</h1>
          {/* flex item 2 */}
          <div className="flex items-center gap-3 text-gray-500 dark:text-tertiary lg:gap-7">
            {/* icon container */}
            <div className="dark-bdr grid h-4 w-4 grid-cols-[auto_1fr] place-items-center gap-3 lg:h-auto lg:w-auto lg:items-center lg:rounded-lg lg:border lg:border-stroke-1 lg:px-3 lg:py-4 ">
              <SearchIcon />
              <input
                type="search"
                className="dark-bg-2 hidden px-3 text-sm focus:outline-none lg:block"
                placeholder="Search settings"
              />
            </div>
            <div className="grid h-6 w-6 place-items-center">
              <NotificationIcon />
            </div>
            <div className="grid h-6 w-6 place-items-center">
              <VDotsIcon />
            </div>
          </div>
        </div>
        {/* sub headings */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto  px-5 pt-4 lg:justify-start lg:gap-10 lg:px-15">
          <SingleHeading
            title="General"
            index={1}
            setActiveHeadingTab={setActiveHeadingTab}
            activeHeadingTab={activeHeadingTab}
          />
          <SingleHeading
            title="Profile"
            index={2}
            setActiveHeadingTab={setActiveHeadingTab}
            activeHeadingTab={activeHeadingTab}
          />
          <SingleHeading
            title="Security"
            index={3}
            setActiveHeadingTab={setActiveHeadingTab}
            activeHeadingTab={activeHeadingTab}
          />
          <SingleHeading
            title="Privacy"
            index={4}
            setActiveHeadingTab={setActiveHeadingTab}
            activeHeadingTab={activeHeadingTab}
          />
          <SingleHeading
            title="Email"
            index={5}
            setActiveHeadingTab={setActiveHeadingTab}
            activeHeadingTab={activeHeadingTab}
          />
          <SingleHeading
            title="Billing"
            index={6}
            setActiveHeadingTab={setActiveHeadingTab}
            activeHeadingTab={activeHeadingTab}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

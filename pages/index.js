import Header from "../components/Header";
import Nav from "../components/Nav";
import Link from "next/link";
import { QuestionIcon, UserIcon } from "../assets/icons";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import SingleInput from "../components/SingleInput";

function Home() {
  const {
    darkMode,
    isProfileEdit,
    setDarkMode,
    setLightMode,
    toggleEditProfile,
  } = useGlobalContext();

  // dark mode handler on page load
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  return (
    <div className="grid-cols-[auto_1fr] lg:grid">
      <Nav />
      <main>
        <Header />
        {/* SETTINGS SECTION */}
        <section className="">
          {/* global grid container */}
          <div className="my-5 max-w-[2500px] grid-cols-[1fr_auto_auto] items-start justify-between gap-7 space-y-5 px-5 xl:grid xl:space-y-0">
            {/* grid item 1 */}
            <div className="dark-bdr dark-bg-2 rounded-xl border border-gray-200 bg-white px-4 py-5 lg:p-8">
              {/* heading container */}
              <div className="mb-6 lg:mb-8">
                <h2 className="mb-2 text-xl lg:mb-1 lg:text-2xl">
                  General settings
                </h2>
                <p className="">
                  Update your profile and how people can contact you generally
                </p>
              </div>

              {/* horizontal line */}
              <hr className="dark-bdr mb-8 hidden border-t border-gray-200 lg:block" />

              {/* content container */}
              <div className="">
                {/* sub-heading flex container */}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base lg:text-xl">Profile details</h3>
                  <button className="blue-txt" onClick={toggleEditProfile}>
                    {isProfileEdit ? "Save" : "Edit"}
                  </button>
                </div>
                {/* several grid containers */}
                {/* container */}
                <div className="mb-5 grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <h4 className=" text-sm">First Name</h4>
                    <SingleInput name="firstName" />
                  </div>
                  <div className="space-y-2">
                    <h4 className=" text-sm">Last Name</h4>
                    <SingleInput name="lastName" />
                  </div>
                </div>

                {/* container */}
                <div className="mb-5">
                  <h4 className=" text-sm">Residential Address</h4>
                  <SingleInput name="address" />
                </div>

                {/* container */}
                <div className="mb-5 lg:mb-7">
                  <h4 className=" text-sm">Email Address</h4>
                  <SingleInput type="email" name="email" />
                </div>

                {/* horizontal line */}
                <hr className="dark-bdr mb-7 hidden border-t border-gray-200 lg:block" />

                {/* container */}
                <div className="mb-5 lg:mb-7">
                  <h3 className="mb-4 text-base lg:text-xl">App appearance</h3>
                  <form action="" className="flex flex-wrap items-center gap-4">
                    <label
                      htmlFor="light-mode"
                      className="flex items-center gap-1 text-gray-600 dark:text-secondary"
                    >
                      <input
                        type="radio"
                        name="mode"
                        id="light-mode"
                        checked={darkMode ? false : true}
                        onClick={setLightMode}
                        readOnly
                      />
                      Light mode
                    </label>
                    <label
                      htmlFor="dark-mode"
                      className="flex items-center gap-1 text-gray-600 dark:text-secondary"
                    >
                      <input
                        type="radio"
                        name="mode"
                        id="dark-mode"
                        checked={darkMode ? true : false}
                        onClick={setDarkMode}
                        readOnly
                      />
                      Dark mode
                    </label>
                    <label
                      htmlFor="system-preference"
                      className="flex items-center gap-1 text-gray-600 dark:text-secondary"
                    >
                      <input type="radio" name="mode" id="system-preference" />
                      System preference
                    </label>
                  </form>
                </div>

                {/* horizontal line */}
                <hr className="dark-bdr mb-7 hidden border-t border-gray-200 lg:block" />

                {/* container */}
                <div className="mb-5 lg:mb-7">
                  <h3 className="mb-3 text-base lg:mb-4 lg:text-xl">
                    Languages
                  </h3>
                  {/* flex container */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/images/country-flag.png" alt="flag" />
                      <p>English</p>
                    </div>
                    {/* button */}
                    <button className="blue-txt rounded-lg border border-gray-200 px-4 py-2 text-xs dark:border-stroke-1 lg:text-base">
                      Change
                    </button>
                  </div>
                </div>

                {/* horizontal line */}
                <hr className="dark-bdr mb-7 hidden border-t border-gray-200 lg:block" />

                {/* container */}
                <div className="mb-5 lg:mb-7">
                  <h3 className="text-base lg:text-xl">Sidebar menu type</h3>
                  <div className="flex items-center justify-between">
                    <p className="py-2">What side bar menu type do you want?</p>
                    {/* button */}
                    <button className="blue-txt lg:base rounded-lg border border-gray-200 px-4 py-2 text-xs dark:border-stroke-1 lg:text-base">
                      Long
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* grid item 2 - middle bar */}
            <div className="hidden self-stretch xl:block">
              <div className="mt-32 h-9 w-2 rounded-full bg-gray-300 dark:bg-[#323232]"></div>
            </div>

            {/* grid item 3 */}
            <div className="dark-bg-2 dark-bdr rounded-2xl border border-gray-200 bg-white px-4 py-5 xl:pr-28">
              <h4 className="mb-4 lg:text-xl">Help and support</h4>
              <p className="mb-1 lg:text-lg">Looking for something else?</p>
              <Link href="#" className="blue-txt mb-5 inline-block">
                Learn more
              </Link>
              <p className="mb-1 lg:text-lg">Tips on how to use pandora?</p>
              <Link href="#" className="blue-txt mb-6 inline-block">
                Learn more
              </Link>
              <h4 className="mb-4 lg:text-xl">Need something else?</h4>
              <div className="mb-5 flex items-center gap-3 text-gray-600">
                <UserIcon className="border" />
                <span className="blue-txt">Contact support</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <QuestionIcon className="border" />
                <span className="blue-txt">FAQs</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

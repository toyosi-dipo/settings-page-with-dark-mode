import { useGlobalContext } from "../contexts/GlobalContext";

export default function NavLink({ icon, title, index }) {
  const { activeNavTab, handleNavTab } = useGlobalContext();
  return (
    <li
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-5  py-3 font-medium duration-300  ${
        index === activeNavTab
          ? "bg-primary-600 text-white hover:bg-primary-800"
          : "text-gray-500 hover:text-primary-500 dark:text-tertiary dark:hover:text-gray-300"
      }`}
      onClick={() => handleNavTab(index)}
    >
      {icon}
      {title}
    </li>
  );
}

export default function NavLink({
  icon,
  title,
  index,
  activeSettingsTab,
  setActiveSettingsTab,
}) {
  return (
    <li
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-5  py-3 font-medium duration-300  ${
        index === activeSettingsTab
          ? "bg-primary-600 text-white hover:bg-primary-800"
          : "text-gray-500 hover:text-primary-500 dark:text-tertiary dark:hover:text-gray-300"
      }`}
      onClick={() => setActiveSettingsTab(index)}
    >
      {icon}
      {title}
    </li>
  );
}

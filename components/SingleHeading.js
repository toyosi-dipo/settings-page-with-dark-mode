function SingleHeading({
  title,
  index,
  activeHeadingTab,
  setActiveHeadingTab,
}) {
  return (
    <div
      className={`cursor-pointer text-sm font-medium hover:text-primary-800 lg:text-lg ${
        index === activeHeadingTab
          ? "text-primary-600"
          : "text-gray-500 dark:text-tertiary"
      }`}
      onClick={() => setActiveHeadingTab(index)}
    >
      <p className="mb-2">{title}</p>
      <div
        className={`h-1 w-full rounded-full ${
          index === activeHeadingTab ? "bg-primary-600" : "bg-transparent"
        }`}
      ></div>
    </div>
  );
}

export default SingleHeading;

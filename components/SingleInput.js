import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function SingleInput({ name, type = "text" }) {
  const { isProfileEdit } = useGlobalContext();
  const [formInput, setFormInput] = useState({
    firstName: "Cameron",
    lastName: "Fisher",
    address: "1298 West Frontier Parkway, TX, USA",
    email: "kenzi.lawson@example.com",
  });

  return (
    <input
      type={type}
      className={`dark-bg-2 w-full rounded-lg border px-4 py-3 text-sm text-gray-600 disabled:cursor-not-allowed dark:text-secondary lg:text-base ${
        isProfileEdit
          ? "border-primary-500"
          : "border-gray-200 dark:border-stroke-1"
      }`}
      value={formInput[name]}
      name={name}
      onChange={(e) =>
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
      }
      disabled={isProfileEdit ? false : true}
    />
  );
}

export default SingleInput;

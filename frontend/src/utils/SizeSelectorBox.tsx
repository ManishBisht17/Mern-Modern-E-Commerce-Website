import { useState } from "react";
import { sizes } from "../constant";

const SizeSelectorBox = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const handleClick = (label: string) => {
    setSelected(selected === label ? null : label);
  };
  //axios need to get the data of the product , is it even avalable or not
  return (
    <>
    <div className="flex gap-4 overflow-hidden">
      {sizes.map((size) => (
        <button
        key={size.label}
        className={`relative w-20 h-10 flex font-light items-center justify-center border rounded-md cursor-pointer transition
    ${selected === size.label ? "border-black bg-gray-200" : "border-gray-300"}
    ${!size.available ? "opacity-50 cursor-not-allowed" : ""}`} // Disable unavailable buttons
    onClick={() => size.available && handleClick(size.label)} // Prevent clicks if not available
    >
          {size.label.toUpperCase()}

          {/* Diagonal Line when size is unavailable */}
          {!size.available && (
            <div className="absolute w-full h-[1px] bg-black rotate-[-45deg]"></div>
          )}
        </button>
      ))}
    </div>
      </>
  );
};

export default SizeSelectorBox;

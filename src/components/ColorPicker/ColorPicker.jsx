import { useState } from "react";

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionIdx].label;

  const makeOptionClassName = (index) => {
    return index === activeOptionIdx
      ? StyleSheet.activeOption
      : StyleSheet.option;
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            className={makeOptionClassName(index)}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

interface Step1Props {
  updateFormData: (data: { installationType: string }) => void;
  blocknavigation: (block: boolean) => void;
}

export const Step1Installation = (props: Step1Props) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const options = ["Residential", "Industrial", "Off-Grid"];

  const handleClick = (type: string) => {
    setSelectedType(type);
    props.updateFormData({ installationType: type });
  };

  useEffect(() => {
    if (selectedType) {
      props.blocknavigation(false);
    } else {
      props.blocknavigation(true);
    }
  }, [selectedType, props]);

  return (
    <div>
      <h2>Select Installation Type</h2>
      <div style={{ display: "flex", gap: "10px" }}></div>

        {options.map((type) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              backgroundColor: selectedType === type ? "#aaa" : "#eee",
            }}
          >
            {type}
          </button>
        ))}
      </div>
  );
};

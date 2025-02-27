import React from "react";

interface ProgressBarProps {
  step: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div style={{ width: "100%", background: "#ddd", height: "10px", marginBottom: "20px" }}>
      <div
        style={{
          width: `${(props.step / 11) * 100}%`,
          height: "10px",
          background: "#4caf50",
        }}
      ></div>
    </div>
  );
};

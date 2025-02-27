import React from "react";

interface NavigationProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  blocknavigation: boolean;
}

export const Navigation = (props: NavigationProps) => {

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      {props.step > 1 && (
        <button onClick={props.prevStep} style={{ padding: "10px", background: "#ddd" }}>
          Back
        </button>
      )}
      {props.blocknavigation || props.step < 10 && (
        <button onClick={props.nextStep} style={{ padding: "10px", background: "#4caf50", color: "#fff" }}>
          Next
        </button>
      )}
    </div>
  );
};

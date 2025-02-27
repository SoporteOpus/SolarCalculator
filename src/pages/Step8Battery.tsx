import React, { useEffect, useState } from "react";

interface Step8BatteryProps {
    updateFormData: (data: { roofMaterial: string }) => void;
    blocknavigation: (block: boolean) => void;
}

export const Step8Battery = (props: Step8BatteryProps) => {
    const [roofMaterial, setRoofMaterial] = useState<string | null>(null);
    const options = ["Yes", "No, but i would like to have one", "No, im not interested", "Maybe Later"];

    const handleClick = (type: string) => {
        setRoofMaterial(type);
    };

    useEffect(() => {
        if (!roofMaterial) {
            props.blocknavigation(true);
        }
        else {
            props.blocknavigation(false);
        }
    }, [roofMaterial, props]);

    return (
        <div>
            <h2>Do you have or want a battery storage system?</h2>
            <div style={{ display: "flex", gap: "10px" }}></div>

            {options.map((roofmaterial) => (
                <button
                    key={roofmaterial}
                    onClick={() => handleClick(roofmaterial)}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        backgroundColor: roofMaterial === roofmaterial ? "#aaa" : "#eee",
                    }}
                >
                    {roofmaterial}
                </button>
            ))}
        </div>
    );
};

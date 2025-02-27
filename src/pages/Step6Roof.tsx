import React, { useEffect, useState } from "react";

interface Step6RoofProps {
    updateFormData: (data: { roofType: string }) => void;
    blocknavigation: (block: boolean) => void;
}

export const Step6Roof = (props: Step6RoofProps) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const options = ["Flat", "Slanted", "Gable Roof", "Hip roof"];

    const handleClick = (type: string) => {
        setSelectedType(type);
    };

    useEffect(() => {
        if (!selectedType) {
            props.blocknavigation(true);
        }
        else {
            props.blocknavigation(false);
        }
    }, [selectedType, props]);

    return (
        <div>
            <h2>What is the roof like?</h2>
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

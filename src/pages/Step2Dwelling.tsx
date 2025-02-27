import React, { useEffect, useState } from "react";

interface Step2Props {
    updateFormData: (data: { dwellingType: string }) => void;
    blocknavigation: (block: boolean) => void;

}

export const Step2Dwelling = (props: Step2Props) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const options = ["Primary", "Secondary"];

    const handleClick = (type: string) => {
        setSelectedType(type);
        props.updateFormData({ dwellingType: type });
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
            <h2>is this your primary home?</h2>
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
                    {type} home
                </button>
            ))}
        </div>
    );
};

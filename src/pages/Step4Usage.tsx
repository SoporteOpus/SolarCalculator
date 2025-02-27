import React, { useEffect, useState } from "react";

interface Step4props {
    updateFormData: (data: { usagePattern: string }) => void;
    blocknavigation: (block: boolean) => void;
}

export const Step4Usage = (props: Step4props) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [customValue, setCustomValue] = useState<string>("");
    const options = ["Mornings, afternoons, nights", "Afternoons and nights", "Weekends and holidays", "Other usage pattern"];

    const handleClick = (type: string) => {
        setSelectedType(type);
        if (type !== "Other usage pattern") {
            props.updateFormData({ usagePattern: type });
        }
    };

    useEffect(() => {
        if (selectedType === "Other usage pattern") {
            if (customValue) {
                props.blocknavigation(false);

                props.updateFormData({ usagePattern: customValue });
            }
            else {
                props.blocknavigation(true);
            }
        } else {
            props.blocknavigation(false);
        }
    }, [selectedType, customValue, props]);

    return (
        <div>
            <h2>When do you use most energy?</h2>
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

            {selectedType === "Other usage pattern" && (
                <input
                    type="text"
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
                    placeholder="Please specify your usage pattern"
                    style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}
                />
            )}
        </div>
    );
};

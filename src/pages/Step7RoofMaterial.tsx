import React, { useEffect, useState } from "react";

interface Step7RoofMaterialProps {
    updateFormData: (data: { roofMaterial: string }) => void;
    blocknavigation: (block: boolean) => void;
}

export const Step7RoofMaterial = (props: Step7RoofMaterialProps) => {
    const [roofMaterial, setRoofMaterial] = useState<string | null>(null);
    const options = ["Tiles", "Metal", "Asphalt shingles", "Bitumen"];

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
            <h2>What material is the roof made of?</h2>
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

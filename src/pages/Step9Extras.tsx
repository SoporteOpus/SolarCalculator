import React, { useEffect, useState } from "react";

interface Step9ExtrasProps {
    updateFormData: (data: {extras: string[]}) => void;
    blocknavigation: (block: boolean) => void;
}

export const Step9Extras = ({ updateFormData, blocknavigation }: Step9ExtrasProps) => {
    const [chargingPoint, setChargingPoint] = useState<string | null>(null);
    const [heatPump, setHeatPump] = useState<string | null>(null);
    
    useEffect(() => {
        const newExtras = [];
        if (chargingPoint) newExtras.push(`Charging Point: ${chargingPoint}`);
        if (heatPump) newExtras.push(`Heat Pump: ${heatPump}`);
        
        updateFormData({ extras: newExtras });
    }, [chargingPoint, heatPump, updateFormData]);

    useEffect(() => {
        blocknavigation(!chargingPoint || !heatPump);
    }, [chargingPoint, heatPump, blocknavigation]);

    return (
        <div>
            <h2>What other additional consumer equipment do you have?</h2>

            <div style={{ cursor: "pointer" }}>
                <h3>Charging Point/Wallbox for Electric Vehicle</h3>
                <select onChange={(e) => setChargingPoint(e.target.value)} value={chargingPoint || ""}>
                    <option value="" disabled>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No, not interested</option>
                    <option value="yes_later">Yes, I would like one</option>
                    <option value="maybe_later">Maybe later</option>
                </select>
            </div>

            <div style={{ cursor: "pointer", marginTop: "10px" }}>
                <h3>Heat Pump or Electric Resistance</h3>
                <select onChange={(e) => setHeatPump(e.target.value)} value={heatPump || ""}>
                    <option value="" disabled>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No, not interested</option>
                    <option value="yes_later">Yes, I would like one</option>
                    <option value="maybe_later">Maybe later</option>
                </select>
            </div>
        </div>
    );
};

import React, { useEffect, useState } from "react";
import styles from "./Step3Energy.module.css";

interface Step3Props {
    updateFormData: (data: { energyConsumption: number; cupsNumber: string }) => void;
    blocknavigation: (block: boolean) => void;
}

export const Step3Energy = (props: Step3Props) => {
    const [energyConsumption, setEnergyConsumption] = useState(325);
    const [cupsNumber, setCupsNumber] = useState("");

    useEffect(() => {
        props.updateFormData({ energyConsumption, cupsNumber });
        if (energyConsumption && cupsNumber) {
            props.blocknavigation(false);
        } else {
            props.blocknavigation(true);
        }
    }, [energyConsumption, cupsNumber, props]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                How much do you usually pay for electricity each month?
            </h2>

            {/* Slider */}
            <div className={styles.sliderContainer}>
                <input
                    type="range"
                    min={50}
                    max={600}
                    value={energyConsumption}
                    onChange={(e) => setEnergyConsumption(Number(e.target.value))}
                    className={styles.slider}
                />
                <div className={styles.sliderLabels}>
                    <span>50</span>
                    <span className={styles.sliderValue}>{energyConsumption}</span>
                    <span>600</span>
                </div>
            </div>

            {/* CUPS Number Input */}
            <input
                type="text"
                placeholder="Enter your CUPS number"
                value={cupsNumber}
                onChange={(e) => setCupsNumber(e.target.value)}
                className={styles.input}
            />

            {/* File upload box */}
            <label className={styles.fileUpload}>
                <input type="file" className={styles.hiddenFileInput} />
                <div className={styles.fileIcon}>📄</div>
                <p>Click to upload invoice</p>
            </label>
        </div>
    );
};

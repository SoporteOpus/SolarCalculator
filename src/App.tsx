import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { ProgressBar } from "./components/ProgressBar";
import { Step1Installation } from "./pages/Step1Installation";
import { Step2Dwelling } from "./pages/Step2Dwelling";
import { Step3Energy } from "./pages/Step3Energy";
import { Step4Usage } from "./pages/Step4Usage";
import { Step5Location } from "./pages/Step5Location";
import { Step6Roof } from "./pages/Step6Roof";
import { Step7RoofMaterial } from "./pages/Step7RoofMaterial";
import { Step8Battery } from "./pages/Step8Battery";
import { Step9Extras } from "./pages/Step9Extras";
import { SolarData } from "./types/SolarData";

export const App = () => {
  const [blockNavigation, setBlockNavigation] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SolarData>({
    installationType: "",
    dwellingType: "",
    energyConsumption: 0,
    cupsNumber: "",
    usagePattern: "",
    location: "",
    roofType: "",
    roofMaterial: "",
    batteryStorage: "",
    extras: [] as string[],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const updateFormData = (data: Partial<typeof formData>) =>
    setFormData({ ...formData, ...data });

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Installation updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 2:
        return <Step2Dwelling updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 3:
        return <Step3Energy updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 4:
        return <Step4Usage updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 5:
        return <Step5Location updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 6:
        return <Step6Roof updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 7:
        return <Step7RoofMaterial updateFormData={updateFormData} blocknavigation={setBlockNavigation} />;
      case 8:
        return <Step8Battery updateFormData={updateFormData} blocknavigation={setBlockNavigation}/>;
      case 9:
        return <Step9Extras updateFormData={updateFormData} blocknavigation={setBlockNavigation}/>;
      case 10:
        // return <Step9Calculating />;
        return null;
      case 11:
        // return <Step10Results formData={formData} />;
        return null;
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Solar Calculator</h1>
      <ProgressBar step={step} />
      {renderStep()}
      <Navigation step={step} nextStep={nextStep} prevStep={prevStep} blocknavigation={blockNavigation} />
    </div>
  );
};

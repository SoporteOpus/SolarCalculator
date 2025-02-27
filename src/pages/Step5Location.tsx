import { useEffect } from "react";
import styles from "./Step5Location.module.css";


declare global {
  interface Window {
    initMap: () => void;
  }
  var google: any;
}

interface Step4props {
    updateFormData: (data: { location: string }) => void;
    blocknavigation: (block: boolean) => void;
}


export const Step5Location = (props: Step4props) => {
  useEffect(() => {
    // Define initMap
    window.initMap = () => {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 40.4168, lng: -3.7038 }, // Default to Madrid
      zoom: 10,
    });

      // Add Autocomplete
      const input = document.getElementById("addressInput") as HTMLInputElement;
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;
        map.setCenter(place.geometry.location);
        map.setZoom(15);
      });
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDn5Yzy5SAuEcUFPVqUXXG_4dRc01SHWZ0&callback=initMap&libraries=places,drawing&v=weekly&solution_channel=GMP_CCS_autocomplete_v1`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const savelocation = () => {
    const input = document.getElementById("addressInput") as HTMLInputElement;
    props.updateFormData({ location: input.value });
    };

    return (
      <div className={styles.container}>
        <h2>Enter your address to locate your roof</h2>
        <div className={styles.inputGroup}>
          <input type="text" id="addressInput" placeholder="Enter street and number" />
          <button className={styles.searchLocation}>
            <div className={styles.arrow}>➤</div>
          </button>
        </div>
        <div className={styles.mapContainer} id="map" style={{ height: "400px", width: "100%" }}></div>
        <button className={styles.confirmRoof} onClick={savelocation}>Confirm Roof</button>
      </div>
    );
}    
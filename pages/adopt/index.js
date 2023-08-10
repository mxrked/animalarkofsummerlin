// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DonationPopup } from "@/assets/components/global/All/DonationPopup";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../../assets/styles/modules/Adopt/Adopt.module.css";

export const getStaticProps = async () => {
  const DOGS_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/json/dogs/Dogs.json"
  );

  const DOGS_RES_DATA = await DOGS_RES.json();

  return {
    props: {
      dogs_data: DOGS_RES_DATA,
    },
  };
};

export default function Adopt({ dogs_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Adopt full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/adopt" />
      <MobileNav />
      <MobileNavMenu disableLink="/adopt" />

      <main id="PAGE_CNT">
        {dogs_data.map((dog, index) => (
          <div key={index}>
            <h1>Dog ID: {dog._dogID}</h1>
            Dog Imgs:
            {dog._dogImg.map((img, index) => (
              <img data-src={img} key={index} className="lazyload" />
            ))}
            <br />
            <h1>Dog Name: {dog._dogName}</h1>
            <h1>Dog Breed: {dog._dogBreed}</h1>
            <p>Dog Weight: {dog._dogWeight}</p>
            <p>Dog Desc: {dog._dogDesc}</p>
            <span>
              Dog Adoption Status:
              <span> {dog._dogAdoptStatus}</span>
            </span>
            <br />
            <br />
            {dog._dogAdoptStatus === "Available" ? (
              <button
                onClick={() => {
                  // Setting the dog that is selected to be adopted for the contact page
                  RemoveStorageVariable("session", "Adopt Select");
                  DeclareStorageVariable(
                    "session",
                    "Adopt Select",
                    dog._dogName
                  );

                  setTimeout(() => {
                    window.location.href = "/contact#adopt_form";
                  }, 300);
                }}
              >
                Adopt
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DonationPopup } from "@/assets/components/global/All/DonationPopup";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { ContactTop } from "@/assets/components/pages/Contact/ContactTop";
import { ContactForm } from "@/assets/components/pages/Contact/ContactForm";
import { ContactAdoptForm } from "@/assets/components/pages/Contact/ContactAdoptForm";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

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

export default function Contact({ dogs_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Contact full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/contact" />
      <MobileNav />
      <MobileNavMenu disableLink="/contact" />

      <main id="PAGE_CNT">
        {/**
        <span>
          Adopt Selection: <span id="adoptSelection"></span>
        </span>
        */}

        {/** 
          <select>
          {dogs_data.map((dog) => (
            <option>{dog._dogName}</option>
          ))}
        </select>
        */}

        <ContactTop />
        <ContactForm />
        <ContactAdoptForm dogs={dogs_data} />
      </main>

      <Footer disableLink="/contact" />
    </div>
  );
}

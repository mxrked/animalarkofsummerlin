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
import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexAdopt } from "@/assets/components/pages/Index/IndexAdopt";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";
import { Footer } from "@/assets/components/global/Footer/Footer";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export const getStaticProps = async () => {
  const INDEX_DOGS_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/json/dogs/IndexDogs.json"
  );

  const INDEX_DOGS_RES_DATA = await INDEX_DOGS_RES.json();

  return {
    props: {
      index_dogs_data: INDEX_DOGS_RES_DATA,
    },
  };
};

export default function Home({ index_dogs_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Index full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/" />
      <MobileNav />
      <MobileNavMenu disableLink="/" />

      <main id="PAGE_CNT">
        <IndexTop />
        <IndexAbout />
        <IndexAdopt indexDogs={index_dogs_data} />
        <IndexContact />
      </main>

      <Footer disableLink="/" />
    </div>
  );
}

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

// Style Imports
import "../assets/styles/modules/About/About.module.css";

export default function About() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_About full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/about" />
      <MobileNav />
      <MobileNavMenu disableLink="/about" />

      <main id="PAGE_CNT"></main>

      <Footer disableLink="/about" />
    </div>
  );
}

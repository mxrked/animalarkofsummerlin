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
import { DonateTop } from "@/assets/components/pages/Donate/DontateTop";
import { DonateTypes } from "@/assets/components/pages/Donate/DonateTypes";

// Style Imports
import "../assets/styles/modules/Donate/Donate.module.css";

export default function Donate() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Donate full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/donate" />
      <MobileNav />
      <MobileNavMenu disableLink="/donate" />

      <main id="PAGE_CNT">
        <DonateTop />
        <DonateTypes />
      </main>

      <Footer disableLink="/donate" />
    </div>
  );
}

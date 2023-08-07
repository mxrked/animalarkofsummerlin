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

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";
export default function Home() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/" />
      <MobileNav />
      <MobileNavMenu disableLink="/" />

      <main id="PAGE_CNT">
        <IndexTop />
        <IndexAbout />
      </main>
    </div>
  );
}

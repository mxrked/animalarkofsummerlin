// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DonationPopup } from "@/assets/components/global/All/DonationPopup";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";

// Style Imports
import "../assets/styles/modules/Adopt/Adopt.module.css";

export default function Adopt() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Adopt full-second">
      <PageHead />
      <DonationPopup />
      <NavTop />

      <main id="PAGE_CNT"></main>
    </div>
  );
}

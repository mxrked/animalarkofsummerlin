// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Adopt/Adopt.module.css";

export default function Adopt() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Adopt full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}

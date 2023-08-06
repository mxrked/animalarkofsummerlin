// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";

// Style Imports
import "../assets/styles/modules/About/About.module.css";

export default function About() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_About full-second">
      <PageHead />
      <NavTop />

      <main id="PAGE_CNT"></main>
    </div>
  );
}

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NotFoundMain } from "@/assets/components/pages/404/NotFoundMain";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_404 full-second">
      <PageHead />

      <main id="PAGE_CNT">
        <NotFoundMain />
      </main>
    </div>
  );
}

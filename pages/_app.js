// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import CheckUserDevice from "@/assets/functions/dom/checkers/CheckUserDevice";
import CheckMobileNavMenuStatus from "@/assets/functions/dom/checkers/CheckMobileNavMenuStatus";
import CheckScreenOrientation from "@/assets/functions/dom/checkers/CheckScreenOrientation";
import ManipFadeFixClasses from "@/assets/functions/dom/manip/ManipFadeFixClasses";
import CheckPageClass from "@/assets/functions/dom/checkers/CheckPageClass";

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [updateUI, setUpdateUI] = useState(0);

  //? GLOBALS
  //! NProgress Init
  useEffect(() => {
    // NProgress.done(); // Prevents NProgress from being stuck after page route completed

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, [router, router.events]);

  //! Forget scroll position and force user back to top of page
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.addEventListener("beforeunload", () => {
      if (window.scrollY !== 0) {
        DeclareStorageVariable("session", "Reload Scroll", true);
      }
    });

    if (sessionStorage.getItem("Reload Scroll")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      RemoveStorageVariable("session", "Reload Scroll");
    }
  }, []);

  //! Updating UI State
  useEffect(() => {
    if (!sessionStorage.getItem("Mobile Nav Opened")) {
      setTimeout(() => {
        if (sessionStorage.getItem("FM Loaded")) {
          setUpdateUI(updateUI + 1);
        }
      }, 2500);
    }
  }, [router]);

  //! Enabling scrolling and pointerevents when updateUI == 1
  useEffect(() => {
    if (updateUI == 1) {
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }
  }, [updateUI]);

  //! Reload Page after route change (This is mostly for the animations)
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (!shallow) {
        setTimeout(() => {
          router.reload();
        }, 3000); // Refresh after 3 seconds
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };

    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  }, [router]);

  //! Reload Page if page is not visible
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (sessionStorage.getItem("EA Fix")) {
  //       if (document.querySelector(".page")) {
  //         if (document.querySelector(".page").style.visibility !== "visible") {
  //           router.reload();
  //         } else {
  //           console.log("No need to refresh. The page is already visible.");
  //         }
  //       }
  //     }
  //   }, 1500);
  // }, []);

  //? DATA
  //! Session/Local Storage Clearing
  useEffect(() => {
    if (!sessionStorage.getItem("EA Fix")) {
      DeclareStorageVariable("session", "EA Fix", true);
      router.reload();
    }

    if (sessionStorage.getItem("EA Fix")) {
      const SS_VARIABLES = [
        "Mobile Nav Opened",
        "Donation Popup Opened",
        "HREF",
        "FM Loaded",
        "Page Reload",
        "Submission Sent",
        "ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog",
      ];
      const LS_VARIABLES = ["ally-supports-cache"];

      // Removing the Adopt Select if user is not on contact page
      if (router.pathname !== "/contact") {
        RemoveStorageVariable("session", "Adopt Select");
      }

      SS_VARIABLES.forEach((variable) => {
        RemoveStorageVariable("session", variable);
      });
      LS_VARIABLES.forEach((variable) => {
        RemoveStorageVariable("local", variable);
      });
    }
  }, [router]);

  //! Adding value after framer motion content has loaded
  useEffect(() => {
    setTimeout(() => {
      DeclareStorageVariable("session", "FM Loaded", true);
    }, 2000);

    window.addEventListener("beforeunload", () => {
      RemoveStorageVariable("session", "FM Loaded");
    });
  }, [router]);

  //? MANIPS
  //! Changing fade classes based on screen size
  useEffect(() => {
    const WINDOW_EVENTS = ["load", "resize"];

    WINDOW_EVENTS.forEach((ev) => {
      window.addEventListener(ev, () => {
        ManipFadeFixClasses("fade-left", "fade-left-fix");
        ManipFadeFixClasses("fade-right", "fade-right-fix");
        ManipFadeFixClasses("fade-up", "fade-up-fix");
        ManipFadeFixClasses("fade-down", "fade-down-fix");
      });
    });
  }, []);

  //? CHECKERS
  //! Check Page Orientation
  useEffect(() => {
    window.addEventListener("orientationchange", () => {
      CheckScreenOrientation();
    });
  }, []);

  //! Check User Device
  useEffect(() => {
    let mobile,
      desktop = false;

    // Page Load
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Resize
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  //! Checking Mobile Nav Menu Status
  useEffect(() => {
    window.addEventListener("resize", () => {
      CheckMobileNavMenuStatus();
    });

    window.addEventListener("load", () => {
      CheckMobileNavMenuStatus();
    });

    router.events.on("routeChangeComplete", () => {
      CheckMobileNavMenuStatus();
    });
  }, [router]);

  //? DISPLAYS/HIDERS
  //! Add selection styling for specific elements by adding a className to each element
  useEffect(() => {
    const ELEMENT_TYPES = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "span",
      "li",
      "img",
      "br",
      "strong",
      "button",
      "label",
      "select",
      "input",
      "textarea",
    ];

    ELEMENT_TYPES.forEach((eT) => {
      const ELEMENTS = document.getElementsByTagName(eT);

      for (let i = 0; i < ELEMENTS.length; i++) {
        if (!ELEMENTS[i].classList.contains("selected")) {
          ELEMENTS[i].classList.add("selected");
        }
      }
    });
  }, []);

  //! Display Page after some time
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".page")) {
        document.querySelectorAll(".page").forEach((page) => {
          page.style.opacity = 1;
          page.style.visibility = "visible";
          page.style.overflowY = "auto";
          page.style.pointerEvents = "auto";
        });
      }
    }, 2500);
  }, []);

  //! Removing/Adding Page class depending on device (THIS FIXED THE PAGE SHOW ISSUE WHEN POPSTATE CHANGES ON MOBILE DEVICES)
  useEffect(() => {
    window.addEventListener("load", () => {
      CheckPageClass();
    });

    window.addEventListener("resize", () => {
      CheckPageClass();
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

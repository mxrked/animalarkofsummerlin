/**
 *
 *  This is the Mobile Nav
 *
 */

import { useRouter } from "next/router";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import { LOGO_WITHOUT_TEXT } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} overrides_MobileNav`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {router.pathname === "/" ? (
                  <div className={`${styles.logo} ${styles.deactive}`}>
                    <img
                      data-src={LOGO_WITHOUT_TEXT}
                      className="lazyload orientation-change-element half-second"
                      alt="Animal Ark of Summerlin Logo."
                    />

                    <div>
                      <h1
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        Animal Ark Of <span>Summerlin</span>
                      </h1>

                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        Dog Rescue & Adoption
                      </span>
                    </div>
                  </div>
                ) : (
                  <a href="/" className={`${styles.logo} ${styles.active}`}>
                    <img
                      data-src={LOGO_WITHOUT_TEXT}
                      className="lazyload orientation-change-element half-second"
                      alt="Animal Ark of Summerlin Logo."
                    />

                    <div>
                      <h1
                        className={`${styles.top_text} orientation-change-element half-second`}
                      >
                        Animal Ark Of <span>Summerlin</span>
                      </h1>

                      <span
                        className={`${styles.bottom_text} orientation-change-element half-second`}
                      >
                        Dog Rescue & Adoption
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  onClick={() => {
                    const MENU = document.getElementById("mobileNavMenu");
                    const DARKEN = document.getElementById(
                      "mobileNavMenuDarken"
                    );
                    const MAIN = document.getElementById("mobileNavMenuMain");
                    const CNT = document.getElementById("mobileNavMenuMainCnt");

                    DeclareStorageVariable(
                      "session",
                      "Mobile Nav Opened",
                      true
                    );

                    document.body.style.pointerEvents = "none";
                    document.body.style.overflowY = "hidden";

                    MENU.style.display = "block";

                    setTimeout(() => {
                      DARKEN.style.opacity = 1;
                      DARKEN.style.visibility = "visible";
                    }, 600);

                    setTimeout(() => {
                      MAIN.style.transform = "translateX(0)";
                      MAIN.style.pointerEvents = "auto";
                    }, 850);

                    setTimeout(() => {
                      CNT.style.opacity = 1;
                      CNT.style.visibility = "visible";
                    }, 1430);

                    setTimeout(() => {
                      DARKEN.style.pointerEvents = "auto";

                      MENU.style.pointerEvents = "auto";
                      MENU.style.overflowY = "auto";
                    }, 2100);
                  }}
                >
                  <span className="half-second" />
                  <span className="half-second" />
                  <span className="half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

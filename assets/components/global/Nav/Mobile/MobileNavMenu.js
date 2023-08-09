/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { LOGO_WITHOUT_TEXT } from "@/assets/cdns/CDNIcons";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";
import { FaTimes } from "react-icons/fa";

export const MobileNavMenu = (props) => {
  return (
    <div
      id="mobileNavMenu"
      className={`${styles.mobile_nav_menu} overrides_MobileNavMenu`}
    >
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
        >
          <img
            data-src={LOGO_WITHOUT_TEXT}
            className="lazyload"
            alt="Animal Ark of Summerlin Logo."
          />

          <button
            className="orientation-change-element half-second"
            onClick={() => {
              CloseMobileNav();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>

          <ul>
            {props.disableLink === "/" ? (
              <li className={`${styles.deactive}`}>
                <span>Home</span>
              </li>
            ) : (
              <li className={`${styles.active}`}>
                <a
                  href="/"
                  className="nav-link orientation-change-element half-second"
                >
                  Home
                  <span className="half-second" />
                </a>
              </li>
            )}
            {props.disableLink === "/about" ? (
              <li className={`${styles.deactive}`}>
                <span>About</span>
              </li>
            ) : (
              <li className={`${styles.active}`}>
                <a
                  href="/about"
                  className="nav-link orientation-change-element half-second"
                >
                  About
                  <span className="half-second" />
                </a>
              </li>
            )}
            {props.disableLink === "/adopt" ? (
              <li className={`${styles.deactive}`}>
                <span>Adopt</span>
              </li>
            ) : (
              <li className={`${styles.active}`}>
                <a
                  href="/adopt"
                  className="nav-link orientation-change-element half-second"
                >
                  Adopt
                  <span className="half-second" />
                </a>
              </li>
            )}
            {props.disableLink === "/donate" ? (
              <li className={`${styles.deactive}`}>
                <span>Donate</span>
              </li>
            ) : (
              <li className={`${styles.active}`}>
                <a
                  href="/donate"
                  className="orientation-change-element half-second"
                >
                  Donate
                  <span className="half-second" />
                </a>
              </li>
            )}
            {props.disableLink === "/contact" ? (
              <li className={`${styles.deactive}`}>
                <span>Contact</span>
              </li>
            ) : (
              <li className={`${styles.active}`}>
                <a
                  href="/contact"
                  className="nav-link orientation-change-element half-second"
                >
                  Contact
                  <span className="half-second" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

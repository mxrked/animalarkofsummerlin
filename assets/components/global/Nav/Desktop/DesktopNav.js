/**
 *
 *  This is the Desktop Nav
 *
 */

import { LOGO_WITHOUT_TEXT } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = (props) => {
  return (
    <nav
      id="desktopNav"
      className={`${styles.desktop_nav} overrides_DesktopNav`}
    >
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_L} ${styles.desktop_nav_inner_side} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                {props.disableLink === "/" ? (
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
              className={`${styles.desktop_nav_R} ${styles.desktop_nav_inner_side} col-lg-8 col-md-8 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul>
                  {props.disableLink === "/" ? (
                    <li className={`${styles.deactive}`}>
                      <span>Home</span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a
                        href="/"
                        className="orientation-change-element half-second"
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
                        className="orientation-change-element half-second"
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
                        className="orientation-change-element half-second"
                      >
                        Adopt
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
                        className="orientation-change-element half-second"
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
        </div>
      </div>
    </nav>
  );
};

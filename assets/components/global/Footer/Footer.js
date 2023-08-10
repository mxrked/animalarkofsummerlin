/**
 *
 *  This is the Footer
 *
 */

import { FaCopyright, FaAmazon, FaFacebook } from "react-icons/fa";
import { LOGO_WITHOUT_TEXT } from "@/assets/cdns/CDNIcons";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = (props) => {
  return (
    <footer id="footer" className={`${styles.footer} overrides_Footer`}>
      <div className={`${styles.footer_top}`}>
        <div className={`${styles.footer_top_inner}`}>
          <div className={`${styles.footer_top_inner_box} container-fluid`}>
            <div className={`${styles.footer_top_inner_row} row`}>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
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

                  <div
                    className={`${styles.copyright} orientation-change-element half-second`}
                  >
                    <FaCopyright className={`${styles.icon}`} />

                    <span>
                      2023 Animal Ark Of Summerlin. All rights reserved.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <div className={`${styles.footer_links}`}>
                    <ul>
                      {props.disableLink === "/" ? (
                        <li className={`${styles.deactive}`}>
                          <span>Home</span>
                        </li>
                      ) : (
                        <li className={`${styles.active}`}>
                          <a
                            href="/"
                            className="orientation-change-element selected half-second"
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
                            className="orientation-change-element selected half-second"
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
                            className="orientation-change-element selected half-second"
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
                            className="orientation-change-element selected half-second"
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
                            href="/contact#contact_form"
                            className="orientation-change-element selected half-second"
                          >
                            Contact
                            <span className="half-second" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className={`${styles.footer_contact}`}>
                    <ul className={`${styles.socials}`}>
                      <li className="orientation-change-element half-second">
                        <FaAmazon
                          className={`${styles.icon}`}
                          onClick={() => {
                            window.open(
                              "https://www.amazon.com/hz/wishlist/ls/29TRY674S0OLN/ref=nav_wishlist_lists_2",
                              "_self"
                            );
                          }}
                        />
                      </li>
                      <li className="orientation-change-element half-second">
                        <FaFacebook
                          className={`${styles.icon}`}
                          onClick={() => {
                            window.open(
                              "https://www.facebook.com/groups/324961672685216",
                              "_self"
                            );
                          }}
                        />
                      </li>
                    </ul>

                    <ul className={`${styles.contact}`}>
                      <li>
                        <span className="orientation-change-element selected half-second">
                          +1 336-918-6049
                        </span>
                      </li>
                      <li>
                        <span className="orientation-change-element selected half-second">
                          animalarkofsummerlin@gmail.com
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <div className={`${styles.footer_bottom_inner}`}>
          <span className="orientation-change-element half-second">
            Website created by{" "}
            <span
              onClick={() => {
                window.open("https://www.codingthefront.com/", "_blank");
              }}
            >
              codingthefront.com
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

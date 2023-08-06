/**
 *
 *  This is the Nav Top
 *
 */

import { FaAmazon, FaFacebook, FaDonate } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavTop = () => {
  return (
    <section id="navTop" className={`${styles.nav_top} overrides_NavTop`}>
      <div className={`${styles.nav_top_inner}`}>
        <div className={`${styles.nav_top_inner_box} container-fluid`}>
          <div className={`${styles.nav_top_inner_row} row`}>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <ul>
                  <li>
                    <span className="orientation-change-element half-second">
                      +1 336-918-6049
                    </span>
                  </li>
                  <li>
                    <span className="orientation-change-element half-second">
                      animalarkofsummerlin@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <button className="donation-toggler orientation-change-element half-second">
                  <span>Donate</span>

                  <FaDonate className={`${styles.icon}`} />
                </button>

                <ul>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 *
 *  This is the About Main
 *
 */
import { useEffect } from "react";

import { FaAmazon, FaFacebook } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN } from "../../../animations/FADES";
import { DOG_ART_2 } from "@/assets/cdns/CDNImgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/About/About.module.css";

export const AboutMain = () => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="aboutMain"
      className={`${styles.about_main} overrides_AboutMain`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.about_main_inner}`}
      >
        <div className={`${styles.about_main_inner_top}`}>
          <div className={`${styles.about_main_inner_top_bg_holder}`}>
            <BackgroundImage
              src={DOG_ART_2}
              className={`${styles.bg}`}
              width="100%"
              height="100%"
            />
          </div>

          <div className={`${styles.about_main_inner_top_text}`}>
            <h1 className="orientation-change-element half-second">
              <span>About</span> AAOS.
            </h1>

            <ul className="orientation-change-element half-second">
              <li>
                <span
                  onClick={() => {
                    window.open(
                      "https://www.amazon.com/hz/wishlist/ls/29TRY674S0OLN/ref=nav_wishlist_lists_2",
                      "_self"
                    );
                  }}
                >
                  <FaAmazon className={`${styles.icon}`} />{" "}
                  <span>Susan's Amazon Wishlist</span>
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/groups/324961672685216",
                      "_self"
                    );
                  }}
                >
                  <FaFacebook className={`${styles.icon}`} />{" "}
                  <span>Susan's Facebook Group</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.about_main_inner_text}`}>
          <p className="orientation-change-element half-second">
            Meet Susan Allison, the compassionate creator of Animal Ark of
            Summerlin, a dog rescue and adoption center. Her life-changing
            encounter with Phoenix, the worst case of neglect she had ever
            witnessed, ignited her passion for helping dogs in need. Through
            Susan's unwavering dedication and the support of a remarkable rescue
            network, Phoenix's transformation journey began.
          </p>

          <p className="orientation-change-element half-second">
            Rescued by 10-year-old Zavian and his mother, Stephanie, from a
            rural area near Reidsville, NC, Phoenix's rescue presented
            challenges as he had moved from his initial spot. Nevertheless,
            Zavian's determination prevailed, and with Susan's guidance and the
            loving foster care provided by Susan Allison, Phoenix blossomed into
            a beautiful and joyful Beagle, embracing his new lease on life. This
            heartwarming tale stands as a testament to the power of love and
            collective efforts, inspiring Susan's continued mission to give
            neglected animals a chance at a brighter future through Animal Ark
            of Summerlin.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the Index Contact
 *
 */

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_LEFT, FADE_RIGHT } from "../../../animations/FADES";
import { INDEX_CONTACT_BG } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  // Triggering the scroll animations
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexContact"
      className={`${styles.index_contact} overrides_IndexContact`}
    >
      <div className={`${styles.index_contact_box} container-fluid`}>
        <div className={`${styles.index_contact_row} row`}>
          <div
            className={`${styles.index_contact_side} ${styles.index_contact_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_RIGHT}
              className={`${styles.index_contact_side_cnt} fm-motion fade-right-fix fade-right`}
            >
              <h1 className="orientation-change-element half-second">
                <span className={`${styles.orange_text}`}>Get In</span>
                <br />
                <span>&nbsp;&nbsp;</span>
                Contact.
              </h1>

              <p className="orientation-change-element half-second">
                We are always on call when it comes to rescuing any man's best
                friend. If you have any questions or concerns, you can contact
                us and we are always capable of solving and issues.
              </p>

              <a
                href="/contact#contact_form"
                className="orientation-change-element half-second"
              >
                <span>Learn More</span>
              </a>
            </motion.div>
          </div>
          <div
            className={`${styles.index_contact_side} ${styles.index_contact_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_LEFT}
              className={`${styles.index_contact_side_cnt} fm-motion fade-left-fix fade-left`}
            >
              <BackgroundImage
                src={INDEX_CONTACT_BG}
                className={`${styles.bg} orientation-change-element half-second`}
                width="100%"
                height="100%"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

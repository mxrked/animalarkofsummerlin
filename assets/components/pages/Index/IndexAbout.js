/**
 *
 *  This is the Index About
 *
 */

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_LEFT, FADE_RIGHT } from "../../../animations/FADES";
import { INDEX_ABOUT_BG } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexAbout"
      className={`${styles.index_about} overrides_IndexAbout`}
    >
      <div className={`${styles.index_about_box} container-fluid`}>
        <div className={`${styles.index_about_row} row`}>
          <div
            className={`${styles.index_about_side} ${styles.index_about_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_RIGHT}
              className={`${styles.index_about_side_cnt} fm-motion fade-right`}
            >
              <BackgroundImage
                src={INDEX_ABOUT_BG}
                className={`${styles.bg} orientation-change-element half-second`}
                width="100%"
                height="100%"
              />
            </motion.div>
          </div>
          <div
            className={`${styles.index_about_side} ${styles.index_about_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <motion.div
              ref={REF}
              initial="hidden"
              animate={CONTROLS}
              variants={FADE_LEFT}
              className={`${styles.index_about_side_cnt} fm-motion fade-left`}
            >
              <h1 className="orientation-change-element half-second">
                <span className={`${styles.orange_text}`}>AAOS's</span>
                <br />
                <span>&nbsp;&nbsp;</span>
                Background.
              </h1>

              <p className="orientation-change-element half-second">
                Animal Ark of Summerlin is a place where dogs can go to stay
                safe and be given loving and caring owners. Learn our background
                in how we dedicate to accomplish this task.
              </p>

              <a
                href="/about"
                className="orientation-change-element half-second"
              >
                <span>Learn More</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

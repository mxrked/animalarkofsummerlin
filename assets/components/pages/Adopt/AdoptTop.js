/**
 *
 *  This is the Adopt Top
 *
 */
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Adopt/Adopt.module.css";

export const AdoptTop = () => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="adoptTop" className={`${styles.adopt_top} overrides_AdoptTop`}>
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.adopt_top_cnt} fm-motion fade-down-fix fade-down`}
      >
        <h1 className="orientation-change-element half-second">
          <span>Adopt</span> a dog.
        </h1>

        <p className="orientation-change-element half-second">
          Below is all of the available dogs that are capable for adoption.
          Select one of them to get to know their details and decide if you
          would like to adopt one.
        </p>
      </motion.div>
    </section>
  );
};

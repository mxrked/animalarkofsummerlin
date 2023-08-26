/**
 *
 *  This is the Donate Top
 *
 */
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Donate/Donate.module.css";

export const DonateTop = () => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="donateTop"
      className={`${styles.donate_top} overrides_DonateTop`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.donate_top_cnt} fm-motion fade-down-fix fade-down`}
      >
        <h1 className="orientation-change-element half-second">
          <span>Make</span> a donation.
        </h1>

        <p className="orientation-change-element half-second">
          If you are feeling generous, you can donate to our goal using PayPal.
          It is not necessary but we will really appreciate it.
        </p>
      </motion.div>
    </section>
  );
};

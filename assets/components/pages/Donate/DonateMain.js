/**
 *
 *  This is the Donate Types
 *
 */
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Donate/Donate.module.css";

export const DonateMain = () => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // $5
  // $15
  // $30

  return (
    <section
      id="donateMain"
      className={`${styles.donate_main} overrides_DonateMain`}
    >
      {" "}
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.donate_main_inner} fm-motion fade-down-fix fade-down`}
      >
        <h1 className="orientation-change-element half-second">
          Type of Donations.
        </h1>

        <p className="orientation-change-element half-second">
          Below is the different amounts you can donate to help our goal in
          helping and rescuing dogs.
        </p>

        <ul className="orientation-change-element half-second">
          <li>$5.00</li>
          <li>$15.00</li>
          <li>$30.00</li>
        </ul>

        <button className="orientation-change-element half-second">
          <span>Donate Via PayPal</span>
        </button>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the Contact Top
 *
 */
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ManipBtn from "@/assets/functions/dom/manip/ManipBtn";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Disabling form button based on url
  useEffect(() => {
    const BTNS = [
      document.getElementById("contactFormBtn"),
      document.getElementById("adoptFormBtn"),
    ];

    if (
      router.asPath.indexOf("/contact") > -1 ||
      router.asPath.indexOf("#contact_form") > -1
    ) {
      setTimeout(() => {
        document.getElementById("contactForm").style.display = "block";
        document.getElementById("contactAdoptForm").style.display = "none";
      }, 400);

      ManipBtn(BTNS[0], "disable", BTNS);
    }

    if (router.asPath.indexOf("#adopt_form") > -1) {
      setTimeout(() => {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("contactAdoptForm").style.display = "block";
      }, 400);

      ManipBtn(BTNS[1], "disable", BTNS);
    }
  }, []);

  return (
    <section
      id="contactTop"
      className={`${styles.contact_top} overrides_ContactTop`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.contact_top_cnt} fm-motion fade-down fade-down-fix`}
      >
        <h1 className="orientation-change-element half-second">
          <span>contact/adopt</span> forms.
        </h1>

        <p className="orientation-change-element half-second">
          Below you can choose whether to fill out an conform form for
          questions/concerns or you can fill out an adoption form for a specific
          dog you are interested in.
        </p>

        <div className={`${styles.contact_top_cnt_btns}`}>
          <button
            onClick={() => {
              const BTNS = [
                document.getElementById("contactFormBtn"),
                document.getElementById("adoptFormBtn"),
              ];

              document.getElementById("contactAdoptForm").style.display =
                "none";
              document.getElementById("contactForm").style.display = "block";

              ManipBtn(BTNS[0], "disable", BTNS);
            }}
            id="contactFormBtn"
            className={`${styles.btn} ${styles.contact_form_btn} orientation-change-element half-second`}
          >
            <span>Contact Form</span>
          </button>
          <button
            onClick={() => {
              const BTNS = [
                document.getElementById("contactFormBtn"),
                document.getElementById("adoptFormBtn"),
              ];

              document.getElementById("contactAdoptForm").style.display =
                "block";
              document.getElementById("contactForm").style.display = "none";

              ManipBtn(BTNS[1], "disable", BTNS);
            }}
            id="adoptFormBtn"
            className={`${styles.btn} ${styles.adopt_form_btn} orientation-change-element half-second`}
          >
            <span>Adoption Form</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

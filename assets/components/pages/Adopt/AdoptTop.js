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
import { CreateAdoptDogsHint } from "@/assets/functions/dom/creates/CreateAdoptDogsHint";

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

        <div className={`${styles.adopt_top_cnt_btns}`}>
          <button
            id="allBtn"
            onClick={() => {
              if (document.querySelector(".dog")) {
                const ALL_DOGS = document.querySelectorAll(".dog");

                ALL_DOGS.forEach((dog) => {
                  dog.style.display = "block";
                });
              }
            }}
            className={`${styles.btn} ${styles.all_btn} orientation-change-element half-second`}
          >
            <span>All</span>
          </button>
          <button
            id="availableBtn"
            onClick={() => {
              if (document.querySelector(".dog")) {
                const ALL_DOGS = document.querySelectorAll(".dog");
                const AVAILABLE_DOGS =
                  document.querySelectorAll(".dog-available");

                ALL_DOGS.forEach((dog) => {
                  dog.style.display = "none";
                });
                AVAILABLE_DOGS.forEach((dog) => {
                  dog.style.display = "block";
                });

                CreateAdoptDogsHint(
                  AVAILABLE_DOGS,
                  "adoptDogsInner",
                  "span",
                  "no-available-hint",
                  "No Available Dogs!"
                );
              }
            }}
            className={`${styles.btn} ${styles.available_btn} orientation-change-element half-second`}
          >
            <span>Available</span>
          </button>
          <button
            id="pendingBtn"
            onClick={() => {
              if (document.querySelector(".dog")) {
                const ALL_DOGS = document.querySelectorAll(".dog");
                const PENDING_DOGS = document.querySelectorAll(".dog-pending");

                ALL_DOGS.forEach((dog) => {
                  dog.style.display = "none";
                });
                PENDING_DOGS.forEach((dog) => {
                  dog.style.display = "block";
                });

                CreateAdoptDogsHint(
                  PENDING_DOGS,
                  "adoptDogsInner",
                  "span",
                  "no-pending-hint",
                  "No Pending Dogs!"
                );
              }
            }}
            className={`${styles.btn} ${styles.pending_btn} orientation-change-element half-second`}
          >
            <span>Pending</span>
          </button>
          <button
            id="adoptedBtn"
            onClick={() => {
              if (document.querySelector(".dog")) {
                const ALL_DOGS = document.querySelectorAll(".dog");
                const ADOPTED_DOGS = document.querySelectorAll(".dog-adopted");

                ALL_DOGS.forEach((dog) => {
                  dog.style.display = "none";
                });
                ADOPTED_DOGS.forEach((dog) => {
                  dog.style.display = "block";
                });

                CreateAdoptDogsHint(
                  ADOPTED_DOGS,
                  "adoptDogsInner",
                  "span",
                  "no-adopted-hint",
                  "No Adopted Dogs!"
                );
              }
            }}
            className={`${styles.btn} ${styles.adopted_btn} orientation-change-element half-second`}
          >
            <span>Adopted</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

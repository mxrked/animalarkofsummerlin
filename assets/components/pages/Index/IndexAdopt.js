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

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAdopt = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  // Triggering the scroll animations
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexAdopt"
      className={`${styles.index_adopt} overrides_IndexAdopt`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_RIGHT}
        className={`${styles.motion} fm-motion fade-right`}
      >
        <div className={`${styles.index_adopt_top}`}>
          <div className={`${styles.index_adopt_top_cnt}`}>
            <h1 className="orientation-change-element half-second">
              <span>Adopt</span> a Dog.
            </h1>

            <p className="orientation-change-element half-second">
              Looking to adopt a dog? We have rescued many different dog breeds
              that are available for adoption.
            </p>

            <a href="/adopt" className="orientation-change-element half-second">
              <span>View All Dogs</span>
            </a>
          </div>
        </div>

        <div className={`${styles.index_adopt_main}`}>
          <div className={`${styles.index_adopt_main_box} container-fluid`}>
            <div className={`${styles.index_adopt_main_row} row`}>
              {props.indexDogs.map((dog) => (
                <div
                  className={`${styles.index_adopt_dog} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div className={`${styles.index_adopt_dog_inner}`}>
                    <div
                      className={`${styles.index_adopt_dog_inner_bg_holder}`}
                    >
                      <BackgroundImage
                        src={dog.getDogImg}
                        className={`${styles.bg}`}
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <div className={`${styles.index_adopt_dog_inner_details}`}>
                      <span
                        className={`${styles.dog_name} orientation-change-element half-second`}
                      >
                        {dog._dogName}
                      </span>

                      <span
                        className={`${styles.dog_breed} orientation-change-element half-second`}
                      >
                        {dog._dogBreed}
                      </span>

                      <div className={`${styles.dog_adoption_status_holder}`}>
                        <span
                          className={`${styles.dog_adoption_status} orientation-change-element half-second`}
                        >
                          {dog._dogAdoptStatus === "Available" ? (
                            <span>Available For Adoption</span>
                          ) : dog._dogAdoptStatus === "Pending" ? (
                            <span>Pending</span>
                          ) : dog._dogAdoptStatus === "Adopted" ? (
                            <span>Adopted</span>
                          ) : (
                            <span>ERROR</span>
                          )}

                          {/** dog._dogAdoptStatus === "Pending" ? (
                            <span>Pending</span>
                          ) : dog._dogAdoptStatus === "Adopted" ? (
                            <span>Adopted</span>
                          ) : */}
                        </span>
                      </div>

                      <a
                        href={`/adopt#${dog._dogID}`}
                        className={`${styles.dog_adopt_link} orientation-change-element half-second`}
                      >
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

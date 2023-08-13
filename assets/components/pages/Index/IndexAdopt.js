/**
 *
 *  This is the Index About
 *
 */

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN, FADE_LEFT, FADE_RIGHT } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAdopt = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  // Triggering the scroll animations
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Listing out all of the dogs
  useEffect(() => {
    let dogIDS = [];
    let dogNames = [];
    let dogBreeds = [];
    let dogWeights = [];
    let dogDescs = [];
    let dogImgs = [];
    let dogAdoptStatuses = [];

    const DOGS_LIST = [];

    // Adding each dogs info to a specific array
    props.indexDogs.forEach((dog) => {
      dogIDS.push(dog._dogID);
      dogNames.push(dog._dogName);
      dogBreeds.push(dog._dogBreed);
      dogWeights.push(dog._dogWeight);
      dogDescs.push(dog._dogDesc);
      dogImgs.push(dog._dogImgs);
      dogAdoptStatuses.push(dog._dogAdoptStatus);
    });

    // Removing duplicates
    dogIDS = Array.from(new Set(dogIDS));
    dogNames = Array.from(new Set(dogNames));
    dogBreeds = Array.from(new Set(dogBreeds));
    // dogWeights = Array.from(new Set(dogWeights));
    dogDescs = Array.from(new Set(dogDescs));
    // dogImgs = Array.from(new Set(dogImgs));
    // dogAdoptStatuses = Array.from(new Set(dogAdoptStatuses));

    // Creating a object for each dog
    for (let i = 0; i < dogIDS.length; i++) {
      // console.log("Dog ID: " + dogIDS[i]);
      // console.log("Dog Name: " + dogNames[i]);
      // console.log("Dog Breed: " + dogBreeds[i]);

      const DOG = {
        _dogID: dogIDS[i],
        _dogName: dogNames[i],
        _dogBreed: dogBreeds[i],
        _dogWeight: dogWeights[i],
        _dogDesc: dogDescs[i],
        // _dogImgs: dogImgs[i],
        _dogAdoptStatus: dogAdoptStatuses[i],
      };

      // Adding dog to a single array
      DOGS_LIST.push(DOG);
    }

    // Removing duplicates
    const UNIQUE_DOGS_LIST = Array.from(new Set(DOGS_LIST));

    // Displaying each dog to console
    UNIQUE_DOGS_LIST.forEach((dog) => {
      if (dog._dogAdoptStatus == "Available") {
        console.table(dog);
      }

      if (dog._dogAdoptStatus == "Pending") {
        console.table(dog);
      }

      if (dog._dogAdoptStatus == "Adopted") {
        console.table(dog);
      }
    });
  }, []);

  return (
    <section
      id="indexAdopt"
      className={`${styles.index_adopt} overrides_IndexAdopt`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.motion} fm-motion fade-down-fix fade-down`}
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
                        src={dog._dogImg[0]}
                        className={`${styles.bg}`}
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <div className={`${styles.index_adopt_dog_inner_details}`}>
                      <div
                        className={`${styles.index_adopt_dog_inner_details_cnt}`}
                      >
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
                            <span
                              className={`${styles.dog_adoption_status_top_text}`}
                            >
                              Adoption Status
                            </span>

                            {dog._dogAdoptStatus === "Available" ? (
                              <span className={`${styles.available}`}>
                                Available
                              </span>
                            ) : dog._dogAdoptStatus === "Pending" ? (
                              <span className={`${styles.pending}`}>
                                Pending
                              </span>
                            ) : dog._dogAdoptStatus === "Adopted" ? (
                              <span className={`${styles.adopted}`}>
                                Adopted
                              </span>
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
                          href={`/adopt/${dog._dogID}`}
                          className={`${styles.dog_adopt_link} orientation-change-element half-second`}
                        >
                          <span>View</span>
                        </a>
                      </div>
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

/**
 *
 *  This is the Adopt Dogs
 *
 */
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_DOWN } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Adopt/Adopt.module.css";

export const AdoptDogs = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

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
    props.dogs.forEach((dog) => {
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

  // // Triggering the adoptTopBtns
  // useEffect(() => {
  //   const ALL_BTN = document.getElementById("allBtn");
  //   const AVAILABLE_BTN = document.getElementById("availableBtn");
  //   const PENDING_BTN = document.getElementById("pendingBtn");
  //   const ADOPTED_BTN = document.getElementById("adoptedBtn");
  // }, []);

  return (
    <section
      id="adoptDogs"
      className={`${styles.adopt_dogs} overrides_AdoptDogs`}
    >
      <motion.div
        id="adoptDogsInner"
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.adopt_dogs_inner} fm-motion fade-down-fix fade-down`}
      >
        <div className={`${styles.adopt_dogs_inner_box} container-fluid`}>
          <div className={`${styles.adopt_dogs_inner_row} row`}>
            {props.dogs.map((dog) => (
              <div
                className={`${
                  styles.adopt_dog
                } dog col-lg-4 col-md-4 col-sm-6 col-xs-12 ${
                  dog._dogAdoptStatus === "Available"
                    ? "dog-available"
                    : dog._dogAdoptStatus === "Pending"
                    ? "dog-pending"
                    : dog._dogAdoptStatus === "Adopted"
                    ? "dog-adopted"
                    : ""
                }`}
              >
                <div className={`${styles.adopt_dog_inner}`}>
                  <div className={`${styles.adopt_dog_inner_bg_holder}`}>
                    <BackgroundImage
                      src={dog._dogImg[0]}
                      className={`${styles.bg}`}
                      width="100%"
                      height="100%"
                    />
                  </div>

                  <div className={`${styles.adopt_dog_inner_details}`}>
                    <div className={`${styles.adopt_dog_inner_details_cnt}`}>
                      {dog._dogName !== "" ? (
                        <span
                          className={`${styles.dog_name} orientation-change-element half-second`}
                        >
                          {dog._dogName}
                        </span>
                      ) : (
                        <span
                          className={`${styles.dog_name} orientation-change-element half-second`}
                        >
                          ERROR: No Dog Name
                        </span>
                      )}

                      {dog._dogBreed !== "" ? (
                        <span
                          className={`${styles.dog_breed} orientation-change-element half-second`}
                        >
                          {dog._dogBreed}
                        </span>
                      ) : (
                        <span
                          className={`${styles.dog_breed} orientation-change-element half-second`}
                        >
                          ERROR: No Dog Breed
                        </span>
                      )}

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
                            <span className={`${styles.pending}`}>Pending</span>
                          ) : dog._dogAdoptStatus === "Adopted" ? (
                            <span className={`${styles.adopted}`}>Adopted</span>
                          ) : (
                            <span>ERROR: No Adoption Status</span>
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
      </motion.div>
    </section>
  );
};

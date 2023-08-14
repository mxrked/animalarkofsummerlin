/**
 *
 *  This is the Dog Main
 *
 */
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiClick } from "react-icons/gi";

import { FADE_DOWN } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ManipDogImg from "@/assets/functions/dom/manip/ManipDogImg";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Dog/Dog.module.css";

export const DogMain = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Setting top image to first image by default
  useEffect(() => {
    document.getElementById(
      "dogTopImg"
    ).style.backgroundImage = `url(${props.dog._dogImg[0]})`;
  }, []);

  // const FIRST_IMG = props.dog._dogImg[0];
  // const SECOND_IMG = props.dog._dogImg[1];
  // const THIRD_IMG = props.dog._dogImg[2];
  // const FOURTH_IMG = props.dog._dogImg[3];

  return (
    <section id="dogMain" className={`${styles.dog_main} overrides_DogMain`}>
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_DOWN}
        className={`${styles.dog_main_inner} fm-motion fade-down fade-down-fix`}
      >
        <span
          className={`${styles.dog_id} orientation-change-element half-second`}
        >
          Dog ID: #{props.dog._dogID}
        </span>

        <div className={`${styles.dog_main_inner_top_img_holder}`}>
          <div
            className={`${styles.bg}`}
            id="dogTopImg"
            width="100%"
            height="100%"
          />
        </div>

        <div className={`${styles.dog_main_inner_imgs_holder}`}>
          <div
            className={`${styles.dog_main_inner_imgs_holder_inner} container-fluid`}
          >
            <div
              className={`${styles.dog_main_inner_imgs_holder_inner_row} row`}
            >
              <div
                className={`${styles.dog_main_inner_imgs_holder_inner_img} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  src={props.dog._dogImg[0]}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                />

                <button
                  onClick={(e) => {
                    ManipDogImg("dogTopImg", props.dog._dogImg[0]);
                  }}
                  className="orientation-change-element half-second"
                >
                  <GiClick className={`${styles.icon}`} />
                </button>
              </div>
              <div
                className={`${styles.dog_main_inner_imgs_holder_inner_img} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  src={props.dog._dogImg[1]}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                />

                <button
                  onClick={(e) => {
                    ManipDogImg("dogTopImg", props.dog._dogImg[1]);
                  }}
                  className="orientation-change-element half-second"
                >
                  <GiClick className={`${styles.icon}`} />
                </button>
              </div>
              <div
                className={`${styles.dog_main_inner_imgs_holder_inner_img} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  src={props.dog._dogImg[2]}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                />

                <button
                  onClick={(e) => {
                    ManipDogImg("dogTopImg", props.dog._dogImg[2]);
                  }}
                  className="orientation-change-element half-second"
                >
                  <GiClick className={`${styles.icon}`} />
                </button>
              </div>
              <div
                className={`${styles.dog_main_inner_imgs_holder_inner_img} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  src={props.dog._dogImg[3]}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                />

                <button
                  onClick={(e) => {
                    ManipDogImg("dogTopImg", props.dog._dogImg[3]);
                  }}
                  className="orientation-change-element half-second"
                >
                  <GiClick className={`${styles.icon}`} />
                </button>
              </div>
            </div>

            {/**
            <button
              onClick={(e) => {
                ManipDogImg("dogTopImg", props.dog._dogImg[0]);
              }}
            >
              First Img
            </button>
            <button
              onClick={(e) => {
                ManipDogImg("dogTopImg", props.dog._dogImg[1]);
              }}
            >
              Second Img
            </button>
            <button>Third Img</button>
            <button>Fourth Img</button>
            */}
          </div>
        </div>

        <div className={`${styles.dog_main_inner_details}`}>
          <div className={`${styles.dog_main_inner_details_cnt}`}>
            <span
              className={`${styles.dog_name} orientation-change-element half-second`}
            >
              {props.dog._dogName}
            </span>

            <span
              className={`${styles.dog_breed} orientation-change-element half-second`}
            >
              {props.dog._dogBreed}
            </span>

            <span
              className={`${styles.dog_weight} orientation-change-element half-second`}
            >
              <strong>Weight:</strong> {props.dog._dogWeight}
            </span>

            <p
              className={`${styles.dog_desc} orientation-change-element half-second`}
            >
              {props.dog._dogDesc}
            </p>

            <div className={`${styles.dog_adoption_status_holder}`}>
              <span
                className={`${styles.dog_adoption_status} orientation-change-element half-second`}
              >
                <span className={`${styles.dog_adoption_status_top_text}`}>
                  Adoption Status
                </span>

                {props.dog._dogAdoptStatus === "Available" ? (
                  <span className={`${styles.available}`}>Available</span>
                ) : props.dog._dogAdoptStatus === "Pending" ? (
                  <span className={`${styles.pending}`}>Pending</span>
                ) : props.dog._dogAdoptStatus === "Adopted" ? (
                  <span className={`${styles.adopted}`}>Adopted</span>
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

            {props.dog._dogAdoptStatus === "Available" ? (
              <button
                className="orientation-change-element half-second"
                onClick={() => {
                  // Setting the dog that is selected to be adopted for the contact page
                  RemoveStorageVariable("session", "Adopt Select");
                  DeclareStorageVariable(
                    "session",
                    "Adopt Select",
                    props.dog._dogName
                  );

                  setTimeout(() => {
                    window.location.href = "/contact#adopt_form";
                  }, 300);
                }}
              >
                Adopt
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

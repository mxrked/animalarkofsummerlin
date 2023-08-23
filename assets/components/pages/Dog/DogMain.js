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

  // Hiding placeholders
  useEffect(() => {
    const DOG_IMG_HOLDERS = document.querySelectorAll(".dog-img-holder");
    const COMPUTED_STYLES = [
      window.getComputedStyle(DOG_IMG_HOLDERS[0]),
      window.getComputedStyle(DOG_IMG_HOLDERS[1]),
      window.getComputedStyle(DOG_IMG_HOLDERS[2]),
      window.getComputedStyle(DOG_IMG_HOLDERS[3]),
    ];
    const PLACEHOLDER_URLS = [
      "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/imgs/placeholders/blue.webp",
      "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/imgs/placeholders/green.webp",
      "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/imgs/placeholders/purple.webp",
      "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/imgs/placeholders/red.webp",
    ];
    const COLUMN_CLASSES = ["col-lg-3", "col-md-3", "col-sm-6", "col-xs-6"];
    const SINGLE_COLUMN = ["col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"];
    const DOUBLE_COLUMN = ["col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"];
    const TRIPLE_COLUMN = ["col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"];
    // const QUAD_COLUMN = ["col-lg-3", "col-md-3", "col-sm-6", "col-xs-6"];

    // Hidden placeholder markers
    let validImg1 = true;
    let validImg2 = true;
    let validImg3 = true;
    let validImg4 = true;

    // Detecting and hiding placeholders
    DOG_IMG_HOLDERS.forEach((holder) => {
      const DOG_IMG = holder.querySelector(".dog-img");
      const DOG_IMG_ARIA_LABEL = DOG_IMG.getAttribute("aria-label");

      PLACEHOLDER_URLS.forEach((url) => {
        if (DOG_IMG_ARIA_LABEL === url) {
          holder.style.display = "none"; // Hiding the placeholder
        }
      });
    });

    // Marking hidden placeholders
    setTimeout(() => {
      if (COMPUTED_STYLES[0].display === "none") {
        validImg1 = false;
      }
      if (COMPUTED_STYLES[1].display === "none") {
        validImg2 = false;
      }
      if (COMPUTED_STYLES[2].display === "none") {
        validImg3 = false;
      }
      if (COMPUTED_STYLES[3].display === "none") {
        validImg4 = false;
      }
    }, 400);

    // Changing column classes for non-hidden images and removing right borders
    setTimeout(() => {
      // All valid
      if (validImg1 && validImg2 && validImg3 && validImg4) {
        DOG_IMG_HOLDERS[3].style.borderRight = "none";
      }

      // None valid
      if (!validImg1 && !validImg2 && !validImg3 && !validImg4) {
        return;
      }

      // 1 valid
      if (validImg1 && !validImg2 && !validImg3 && !validImg4) {
        COLUMN_CLASSES.forEach((column) => {
          DOG_IMG_HOLDERS[0].classList.remove(column);
        });

        SINGLE_COLUMN.forEach((column) => {
          DOG_IMG_HOLDERS[0].classList.add(column);
        });

        DOG_IMG_HOLDERS[0].style.borderRight = "none";
      }

      // 1,2 valid
      if (validImg1 && validImg2 && !validImg3 && !validImg4) {
        COLUMN_CLASSES.forEach((column) => {
          DOG_IMG_HOLDERS[0].classList.remove(column);
        });

        DOUBLE_COLUMN.forEach((column) => {
          DOG_IMG_HOLDERS[0].classList.add(column);
        });

        COLUMN_CLASSES.forEach((column) => {
          DOG_IMG_HOLDERS[1].classList.remove(column);
        });

        DOUBLE_COLUMN.forEach((column) => {
          DOG_IMG_HOLDERS[1].classList.add(column);
        });

        DOG_IMG_HOLDERS[1].style.borderRight = "none";
      }

      // 1,2,3 valid
      if (validImg1 && validImg2 && validImg3 && !validImg4) {
        COLUMN_CLASSES.forEach((column) => {
          DOG_IMG_HOLDERS[0].classList.remove(column);
        });

        TRIPLE_COLUMN.forEach((column) => {
          DOG_IMG_HOLDERS[0].classList.add(column);
        });

        COLUMN_CLASSES.forEach((column) => {
          DOG_IMG_HOLDERS[1].classList.remove(column);
        });

        TRIPLE_COLUMN.forEach((column) => {
          DOG_IMG_HOLDERS[1].classList.add(column);
        });

        COLUMN_CLASSES.forEach((column) => {
          DOG_IMG_HOLDERS[2].classList.remove(column);
        });

        TRIPLE_COLUMN.forEach((column) => {
          DOG_IMG_HOLDERS[2].classList.add(column);
        });

        DOG_IMG_HOLDERS[2].style.borderRight = "none";
      }
    }, 650);
  }, []);

  // const FIRST_IMG = props.dog._dogImg[0];
  // const SECOND_IMG = props.dog._dogImg[1];
  // const THIRD_IMG = props.dog._dogImg[2];
  // const FOURTH_IMG = props.dog._dogImg[3];

  return (
    <section id="dogMain" className={`${styles.dog_main} overrides_DogMain`}>
      <motion.div
        key={props.dog._dogID}
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
                className={`${styles.dog_main_inner_imgs_holder_inner_img} dog-img-holder col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  aria-label={props.dog._dogImg[0]}
                  src={props.dog._dogImg[0]}
                  className={`${styles.bg} dog-img`}
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
                className={`${styles.dog_main_inner_imgs_holder_inner_img} dog-img-holder col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  aria-label={props.dog._dogImg[1]}
                  src={props.dog._dogImg[1]}
                  className={`${styles.bg} dog-img`}
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
                className={`${styles.dog_main_inner_imgs_holder_inner_img} dog-img-holder col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  aria-label={props.dog._dogImg[2]}
                  src={props.dog._dogImg[2]}
                  className={`${styles.bg} dog-img`}
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
                className={`${styles.dog_main_inner_imgs_holder_inner_img} dog-img-holder col-lg-3 col-md-3 col-sm-6 col-xs-6`}
              >
                <BackgroundImage
                  aria-label={props.dog._dogImg[3]}
                  src={props.dog._dogImg[3]}
                  className={`${styles.bg} dog-img`}
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
            {props.dog._dogName !== "" ? (
              <span
                className={`${styles.dog_name} orientation-change-element half-second`}
              >
                {props.dog._dogName}
              </span>
            ) : (
              <span
                className={`${styles.dog_name} orientation-change-element half-second`}
              >
                ERROR: No Dog Name
              </span>
            )}

            {props.dog._dogBreed !== "" ? (
              <span
                className={`${styles.dog_breed} orientation-change-element half-second`}
              >
                {props.dog._dogBreed}
              </span>
            ) : (
              <span
                className={`${styles.dog_breed} orientation-change-element half-second`}
              >
                ERROR: No Dog Breed
              </span>
            )}

            {props.dog._dogWeight !== "?" ? (
              <span
                className={`${styles.dog_weight} orientation-change-element half-second`}
              >
                <strong>Weight:</strong> {props.dog._dogWeight}
              </span>
            ) : props.dog._dogWeight !== "" ? (
              <span
                className={`${styles.dog_weight} orientation-change-element half-second`}
              >
                ERROR: No Dog Weight
              </span>
            ) : (
              <span
                className={`${styles.dog_weight} orientation-change-element half-second`}
              >
                ERROR: No Dog Weight
              </span>
            )}

            {props.dog._dogDesc !== "" ? (
              <p
                className={`${styles.dog_desc} orientation-change-element half-second`}
              >
                {props.dog._dogDesc}
              </p>
            ) : (
              <p
                className={`${styles.dog_desc} orientation-change-element half-second`}
              >
                ERROR: No Dog Desc
              </p>
            )}

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
                  <span>ERROR: No Adoption Status</span>
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

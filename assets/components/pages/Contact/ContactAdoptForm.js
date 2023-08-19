/**
 *
 *  This is the Contact Adopt Form
 *
 */
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_UP } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ManipElement from "@/assets/functions/dom/manip/ManipElement";
import EmailSend from "@/assets/functions/data/email/AdoptionFormSend";

import styles from "../../../styles/modules/Contact/Contact.module.css";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

export const ContactAdoptForm = (props) => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Setting selected adoptable dog in select dropdown
  useEffect(() => {
    const DOGS_SELECT = document.getElementById("emailDogName");
    const DOGS_SELECT_LABEL = document.getElementById("emailDogNameLabel");
    const SESSION_VALUE = sessionStorage.getItem("Adopt Select");

    if (SESSION_VALUE) {
      for (let i = 0; i < DOGS_SELECT.options.length; i++) {
        if (DOGS_SELECT.options[i].value === SESSION_VALUE) {
          DOGS_SELECT.options[i].selected = true;
          break;
        }
      }

      ManipElement(DOGS_SELECT_LABEL, "disable");
      ManipElement(DOGS_SELECT, "disable");
    }

    console.log(document.getElementById("emailDogName").selectedIndex);
  }, []);

  const STATES_ARRAY = [
    "AL : Alabama",
    "AK : Alaska",
    "AZ : Arizona",
    "AR : Arkansas",
    "CA : California",
    "CO : Colorado",
    "CT : Connecticut",
    "DC : District of Columbia",
    "DE : Delaware",
    "FL : Florida",
    "GA : Georgia",
    "HI : Hawaii",
    "ID : Idaho",
    "IL : Illinois",
    "IN : Indiana",
    "IA : Iowa",
    "KS : Kansas",
    "KY : Kentucky",
    "LA : Louisiana",
    "ME : Maine",
    "MD : Maryland",
    "MA : Massachusetts",
    "MI : Michigan",
    "MN : Minnesota",
    "MS : Mississippi",
    "MO : Missouri",
    "MT : Montana",
    "NE : Nebraska",
    "NV : Nevada",
    "NH : New Hampshire",
    "NJ : New Jersey",
    "NM : New Mexico",
    "NY : New York",
    "NC : North Carolina",
    "ND : North Dakota",
    "OH : Ohio",
    "OK : Oklahoma",
    "OR : Oregon",
    "PA : Pennsylvania",
    "RI : Rhode Island",
    "SC : South Carolina",
    "SD : South Dakota",
    "TN : Tennessee",
    "TX : Texas",
    "UT : Utah",
    "VT : Vermont",
    "VA : Virginia",
    "WA : Washington",
    "WV : West Virginia",
    "WI : Wisconsin",
    "WY : Wyoming",
  ];

  return (
    <section
      id="contactAdoptForm"
      className={`${styles.contact_adopt_form} overrides_ContactAdoptForm`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_UP}
        className={`${styles.contact_adopt_form_cnt} fm-motion fade-up fade-up-fix`}
      >
        <h1 className="orientation-change-element half-second">
          Adoption Form
        </h1>

        <span
          id="adoptFormNotice"
          className={`${styles.form_notice} orientation-change-element half-second`}
        >
          &nbsp;
        </span>

        <form
          id="adoptionForm"
          noValidate="noValidate"
          autoComplete={"false"}
          onSubmit={(e) => {
            EmailSend(router, e);
          }}
          onReset={(e) => {
            // Removing Adopt Select cookie
            RemoveStorageVariable("session", "Adopt Select");

            // Enabling the first input field and label
            ManipElement(
              document.getElementById("emailDogNameLabel"),
              "enable"
            );
            ManipElement(document.getElementById("emailDogName"), "enable");
          }}
        >
          <div className={`${styles.form_box} container-fluid`}>
            <div className={`${styles.form_row} ${styles.single_row} row`}>
              <div
                className={`${styles.form_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailDogName"
                    id="emailDogNameLabel"
                    className="orientation-change-element half-second"
                  >
                    Dog Selected To Adopt
                  </label>

                  <select
                    name="emailDogName"
                    id="emailDogName"
                    className="orientation-change-element half-second"
                    onChange={(e) => {
                      // Changing Adopt Select cookie on selection change
                      if (e.currentTarget.selectedIndex !== 0) {
                        RemoveStorageVariable("session", "Adopt Select");
                        DeclareStorageVariable(
                          "session",
                          "Adopt Select",
                          e.currentTarget.options[e.currentTarget.selectedIndex]
                            .text
                        );
                      } else {
                        RemoveStorageVariable("session", "Adopt Select");
                      }
                    }}
                  >
                    <option>-- NOT SELECTED --</option>

                    {props.dogs.map((dog) =>
                      dog._dogAdoptStatus === "Available" ? (
                        <option>{dog._dogName}</option>
                      ) : null
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_side} ${styles.form_side_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailFirstName_A"
                    id="emailFirstNameLabel"
                    className="orientation-change-element half-second"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="emailFirstName_A"
                    name="emailFirstName"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
              <div
                className={`${styles.form_side} ${styles.form_side_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailLastName_A"
                    id="emailLastNameLabel"
                    className="orientation-change-element half-second"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="emailLastName_A"
                    name="emailLastName"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_side} ${styles.form_side_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailClientEmail_A"
                    id="emailClientEmailLabel"
                    className="orientation-change-element half-second"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="emailClientEmail_A"
                    name="emailClientEmail"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
              <div
                className={`${styles.form_side} ${styles.form_side_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailPhoneNumber_A"
                    id="emailPhoneNumberLabel"
                    className="orientation-change-element half-second"
                  >
                    Phone Number <span>(Ex: +1336....)</span>
                  </label>

                  <input
                    type="tel"
                    id="emailPhoneNumber_A"
                    name="emailPhoneNumber"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_side} ${styles.form_side_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailStreetAddress_A"
                    id="emailStreetAddressLabel"
                    className="orientation-change-element half-second"
                  >
                    Street Address
                  </label>

                  <input
                    type="text"
                    id="emailStreetAddress_A"
                    name="emailStreetAddress"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
              <div
                className={`${styles.form_side} ${styles.form_side_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailCity_A"
                    id="emailCityLabel"
                    className="orientation-change-element half-second"
                  >
                    City
                  </label>

                  <input
                    type="text"
                    id="emailCity_A"
                    name="emailCity"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_side} ${styles.form_side_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailState"
                    id="emailStateLabel"
                    className="orientation-change-element half-second"
                  >
                    State
                  </label>

                  <select
                    id="emailState"
                    name="emailState"
                    className="orientation-change-element half-second"
                  >
                    <option>-- NOT SELECTED --</option>

                    {STATES_ARRAY.map((s) => (
                      <option>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div
                className={`${styles.form_side} ${styles.form_side_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailZipCode_A"
                    id="emailZipCodeLabel"
                    className="orientation-change-element half-second"
                  >
                    ZIP Code
                  </label>

                  <input
                    type="text"
                    id="emailZipCode_A"
                    name="emailZipCode"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.single_row} row`}>
              <div
                className={`${styles.form_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailMessage_A"
                    id="emailMessageLabel"
                    className="orientation-change-element half-second"
                  >
                    Message/Details
                  </label>

                  <textarea
                    id="emailMessage_A"
                    name="emailMessage"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.form_btns}`}>
            <button
              type={"submit"}
              className={`${styles.send} half-second orientation-change-element`}
            >
              Send
            </button>
            <button
              type={"reset"}
              className={`${styles.reset} half-second orientation-change-element`}
            >
              Clear
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the Contact Form
 *
 */
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_UP } from "../../../animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import EmailSend from "@/assets/functions/data/email/ContactFormSend";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactForm = () => {
  const router = useRouter();

  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();

  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="contactForm"
      className={`${styles.contact_form} overrides_ContactAdoptForm`}
    >
      <motion.div
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_UP}
        className={`${styles.contact_form_cnt} fm-motion fade-up fade-up-fix`}
      >
        <h1 className="orientation-change-element half-second">Contact Form</h1>

        <span
          id="contactFormNotice"
          className={`${styles.form_notice} orientation-change-element half-second`}
        >
          &nbsp;
        </span>

        <form
          id="contactFormForm"
          noValidate="noValidate"
          autoComplete={"false"}
          onSubmit={(e) => {
            EmailSend(router, e);
          }}
        >
          <div className={`${styles.form_box} container-fluid`}>
            <div className={`${styles.form_row} ${styles.double_row} row`}>
              <div
                className={`${styles.form_side} ${styles.form_side_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label
                    for="emailFirstName"
                    id="emailFirstNameLabel"
                    className="orientation-change-element half-second"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="emailFirstName"
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
                    for="emailLastName"
                    id="emailLastNameLabel"
                    className="orientation-change-element half-second"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="emailLastName"
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
                    for="emailClientEmail"
                    id="emailClientEmailLabel"
                    className="orientation-change-element half-second"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="emailClientEmail"
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
                    for="emailPhoneNumber"
                    id="emailPhoneNumberLabel"
                    className="orientation-change-element half-second"
                  >
                    Phone Number <span>(Ex: +1336....)</span>
                  </label>

                  <input
                    type="tel"
                    id="emailPhoneNumber"
                    name="emailPhoneNumber"
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
                    for="emailSubject"
                    id="emailSubjectLabel"
                    className="orientation-change-element half-second"
                  >
                    Subject:
                  </label>

                  <input
                    type="text"
                    id="emailSubject"
                    name="emailSubject"
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
                    for="emailMessage"
                    id="emailMessageLabel"
                    className="orientation-change-element half-second"
                  >
                    Message/Details
                  </label>

                  <textarea
                    id="emailMessage"
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

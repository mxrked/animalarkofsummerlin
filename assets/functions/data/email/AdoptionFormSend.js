/**
 *
 *  This is used to send an adoption form to an email
 *  @param {Object} input - The input element
 *  @param {Object} rooter - The router variable
 *  @param {Object} formTarget - The form variable
 *
 *
 */

import emailjs from "@emailjs/browser";

import CheckValidEmail from "./CheckValidEmail";
import CheckValidPhoneNumber from "./CheckValidPhoneNumber";
import DeclareStorageVariable from "../storage/DeclareStorageVariable";

const SERVICE_ID = "service_zswk7hi";
const TEMPLATE_ID = "template_91auihg";
const PUBLIC_KEY = "lei2lUPnqstll0drA";

emailjs.init(PUBLIC_KEY);

function CheckForSpaceInFirstCharacter(input) {
  const CHECK_FOR_SPACE = /^\s/.test(input.value);

  if (CHECK_FOR_SPACE) {
    return true;
  } else {
    return false;
  }
}

export default function EmailSend(rooter, formTarget) {
  const FORM_NOTICE = document.getElementById("formNotice");
  const FIRST_NAME = document.getElementById("emailFirstName");
  const LAST_NAME = document.getElementById("emailLastName");
  const DOG_NAME = document.getElementById("emailDogName");
  const DOG_NAME_SELECTED_INDEX = DOG_NAME.selectedIndex;
  const STREET_ADDRESS = document.getElementById("emailStreetAddress");
  const STATE = document.getElementById("emailState");
  const ZIP_CODE = document.getElementById("emailZipCode");
  const CLIENT_EMAIL_ADDRESS = document.getElementById("emailClientEmail");
  const PHONE_NUMBER = document.getElementById("emailPhoneNumber");
  const MESSAGE = document.getElementById("emailMessage");

  const FULL_NAME = LAST_NAME.value + ", " + FIRST_NAME.value;

  const TEMPLATE_PARAMS = {
    emailFullName: FULL_NAME,
    emailDogName: DOG_NAME.options[DOG_NAME_SELECTED_INDEX].text,
    emailStreetAddress: STREET_ADDRESS.value,
    emailState: STATE.value,
    emailZipCode: ZIP_CODE.value,
    emailPhoneNumber: PHONE_NUMBER.value,
    emailClientEmail: CLIENT_EMAIL_ADDRESS.value,
    emailMessage: MESSAGE.value,
  };

  // Value checkers
  const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(PHONE_NUMBER);
  const CHECK_EMAIL = CheckValidEmail(CLIENT_EMAIL_ADDRESS);

  // Value spacers
  const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(FIRST_NAME);
  const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(LAST_NAME);
  const SPACE_EMAIL = CheckForSpaceInFirstCharacter(CLIENT_EMAIL_ADDRESS);
  const SPACE_MESSAGE = CheckForSpaceInFirstCharacter(MESSAGE);
  const SPACE_STREET_ADDRESS = CheckForSpaceInFirstCharacter(STREET_ADDRESS);
  const SPACE_ZIP_CODE = CheckForSpaceInFirstCharacter(ZIP_CODE);
  const SPACE_STATE = CheckForSpaceInFirstCharacter(STATE);

  // Validation checks
  let nonEmptyInputs = false;
  let noSpacesAsFirstCharacter = false;
  let validEmail = false;
  let validPhone = false;
  let sentSuccess = false; // This is used to determine if the email was sent successfully

  // Prevents the form send
  formTarget.preventDefault();

  // Sending for after all valid checks
  if (
    FIRST_NAME.value != "" &&
    LAST_NAME.value != "" &&
    CLIENT_EMAIL_ADDRESS.value != "" &&
    DOG_NAME.value != "-- NOT SELECTED --" &&
    STREET_ADDRESS.value != "" &&
    ZIP_CODE.value != "" &&
    STATE.value != "" &&
    PHONE_NUMBER.value != "" &&
    MESSAGE.value != ""
  ) {
    nonEmptyInputs = true;

    // Style form notice
    // ....

    if (CHECK_EMAIL) {
      validEmail = true;

      // Style form notice
      // ....

      if (CHECK_PHONE_NUMBER) {
        validPhone = true;

        // Style form notice
        // ....

        if (
          !SPACE_FIRST_NAME &&
          !SPACE_LAST_NAME &&
          !SPACE_EMAIL &&
          !SPACE_MESSAGE &&
          !SPACE_STATE &&
          !SPACE_STREET_ADDRESS &&
          !SPACE_ZIP_CODE
        ) {
          noSpacesAsFirstCharacter = true;

          // Style form notice
          // ....

          formTarget.preventDefault();

          // Sending the email
          emailjs
            .send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS)
            .then((res) => {
              console.log("Email sent successfully: " + res);

              sentSuccess = true;

              DeclareStorageVariable("session", "Submission Sent", true);

              setTimeout(() => {
                if (sentSuccess) {
                  rooter.reload();
                }
              }, 300);
            })
            .catch((error) => {
              console.error("Error sending email: " + error);
            });
        } else {
          noSpacesAsFirstCharacter = false;
          //   FORM_NOTICE.style.color = "red";
          //   FORM_NOTICE.style.opacity = 1;
          //   FORM_NOTICE.innerHTML =
          //     "Error: You cannot have a space as the first character in an input.";
        }
      } else {
        validPhone = false;
        // FORM_NOTICE.style.color = "red";
        // FORM_NOTICE.style.opacity = 1;
        // FORM_NOTICE.innerHTML = "Error: That is an invalid phone number.";
      }
    } else {
      validEmail = false;
      //   FORM_NOTICE.style.color = "red";
      //   FORM_NOTICE.style.opacity = 1;
      //   FORM_NOTICE.innerHTML = "Error: That is an invalid email address.";
    }
  } else {
    nonEmptyInputs = false;
    // FORM_NOTICE.style.color = "red";
    // FORM_NOTICE.style.opacity = 1;
    // FORM_NOTICE.innerHTML = "Error: You cannot have empty inputs.";
  }
}

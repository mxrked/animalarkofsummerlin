/**
 *
 *  This is used to toggle the donation popup
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleDonationPopup() {
  const POPUP = document.getElementById("donationPopup");
  const DARKEN = document.getElementById("donationPopupDarken");
  const MAIN = document.getElementById("donationPopupMain");

  DeclareStorageVariable("session", "Donation Popup Opened", true);

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  POPUP.style.display = "block";

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";

    MAIN.style.opacity = 1;
    MAIN.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    POPUP.style.pointerEvents = "auto";
    POPUP.style.overflowY = "auto";
  }, 1700);
}

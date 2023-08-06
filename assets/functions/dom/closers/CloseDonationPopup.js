/**
 *
 *  This is used to close the donation popup
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseDonationPopup() {
  const POPUP = document.getElementById("donationPopup");
  const DARKEN = document.getElementById("donationPopupDarken");
  const MAIN = document.getElementById("donationPopupMain");

  POPUP.style.pointerEvents = "none";
  POPUP.style.overflowY = "hidden";

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
    MAIN.style.opacity = 0;
    MAIN.style.visibility = "hidden";
  }, 200);

  setTimeout(() => {
    RemoveStorageVariable("session", "Donation Popup Opened");

    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 1200);
}

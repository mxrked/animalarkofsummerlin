/**
 *
 *  This is the Donation Popup
 *
 */

import styles from "../../../styles/modules/All/All.module.css";

export const DonationPopup = () => {
  return (
    <div id="donationPopup" className={`${styles.donation_popup}`}>
      <div
        id="donationPopupDarken"
        className={`${styles.darken} full-second`}
      />

      <div
        id="donationPopupMain"
        className={`${styles.donation_popup_main} full-second`}
      >
        <div className={`${styles.donation_popup_main_cnt} half-second`}>
          <h1 className="orientation-change-element half-second">
            Make A Donation.
          </h1>

          <p className="orientation-change-element half-second">
            Please select what type of service you would like to use to make
            your donation transaction.
          </p>

          <ul>
            <li className="orientation-change-element half-second">
              <span>PayPal</span>
            </li>
            <li className="orientation-change-element half-second">
              <span>Venmo</span>
            </li>
            <li className="orientation-change-element half-second">
              <span>Zelle</span>
            </li>
          </ul>

          <button
            id="donationPopupCloser"
            className="orientation-change-element half-second"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

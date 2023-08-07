/**
 *
 *  This is the Index About
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_ABOUT_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  return (
    <section
      id="indexAbout"
      className={`${styles.index_about} overrides_IndexAbout`}
    >
      <div className={`${styles.index_about_box} container-fluid`}>
        <div className={`${styles.index_about_row} row`}>
          <div
            className={`${styles.index_about_side} ${styles.index_about_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <BackgroundImage
              src={INDEX_ABOUT_BG}
              className={`${styles.bg} orientation-change-element half-second`}
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.index_about_side} ${styles.index_about_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <div className={`${styles.index_about_side_cnt}`}>
              <h1 className="orientation-change-element half-second">
                <span className={`${styles.orange_text}`}>AAOS's</span>
                <br />
                <span>&nbsp;&nbsp;</span>
                Background.
              </h1>

              <p className="orientation-change-element half-second">
                Animal Ark of Summerlin is a place where dogs can go to stay
                safe and be given loving and caring owners. Learn our background
                in how we dedicate to accomplish this task.
              </p>

              <a
                href="/about"
                className="orientation-change-element half-second"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

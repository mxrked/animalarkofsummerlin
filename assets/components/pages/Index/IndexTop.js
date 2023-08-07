/**
 *
 *  This is the Index Top
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_TOP_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <BackgroundImage
        src={INDEX_TOP_BG}
        className={`${styles.bg} orientation-change-element half-second`}
        width="100%"
        height="100%"
      />

      <div className={`${styles.index_top_overlay}`}>
        <div className={`${styles.index_top_overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Never
            <br />
            <span>&nbsp;</span>Forgotten.
          </h1>

          <p className="orientation-change-element half-second">
            Animal Ark of Summerlin is a NC local dog rescue and adoption
            shelter.
          </p>

          <ul>
            <li>
              <a
                href="/about"
                className="orientation-change-element half-second"
              >
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a
                href="/adopt"
                className="orientation-change-element half-second"
              >
                <span>Adopt A Dog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

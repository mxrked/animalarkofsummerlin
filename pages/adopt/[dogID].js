// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import { ADOPT_KWS } from "@/assets/data/variables/ARRAYS";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

// Component Imports
// import { PageHead } from "@/assets/components/global/All/PageHead";
import { DonationPopup } from "@/assets/components/global/All/DonationPopup";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import styles from "../../assets/styles/modules/Adopt/Adopt.module.css";
import "../../assets/styles/modules/Adopt/Adopt.module.css";

export async function getStaticPaths() {
  try {
    const ALL_DOGS = await fetch(
      "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/json/dogs/Dogs.json"
    );

    if (!ALL_DOGS.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_DOGS_DATA = await ALL_DOGS.json();

    // Generating all dogs pages/paths
    const paths = ALL_DOGS_DATA.map((item) => ({
      params: { dogID: item._dogID },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  // Getting the link for the JSON
  try {
    const ALL_DOGS = await fetch(
      "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/json/dogs/Dogs.json"
    );

    if (!ALL_DOGS.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_DOGS_DATA = await ALL_DOGS.json();

    // Finding the specific item using dogID
    const DOG = ALL_DOGS_DATA.find((item) => item._dogID === params.dogID);

    // If no dog, throw error
    if (!DOG) {
      throw new Error(`Dog with ID "${params.dogID}" not found`);
    }

    // Returning the props
    return {
      props: {
        DOG,
      },
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      props: {
        DOG: null, // Assign null in case of an error
      },
    };
  }
}

export default function Dog({ DOG }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Adopt full-second">
      {/** <PageHead /> */}

      <Head>
        <title>Animal Ark of Summerlin - {DOG._dogName}</title>
        <meta name="keywords" content={ADOPT_KWS} />
        <meta
          name="description"
          content="Adopt your perfect dog today! Browse adoptable dogs, get details, and simplify the adoption process. Find a loving companion for life."
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content={`Animal Ark of Summerlin - ${DOG._dogName}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={router.pathname} />
        {/** 
         <meta
          name="google-site-verification"
          content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
        />
        */}

        <link rel="canonical" href={router.pathname} />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/icons/tab-icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/icons/tab-icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/icons/tab-icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/icons/tab-icons/favicon-16x16.png"
        />
      </Head>

      <DonationPopup />
      <NavTop />
      <DesktopNav disableLink="/adopt" />
      <MobileNav />
      <MobileNavMenu disableLink="/adopt" />

      <main id="PAGE_CNT">
        {/** <img data-src={DOG._dogImg[0]} className="lazyload" /> */}
        <h1>Dog ID: {DOG._dogID}</h1>
        Dog Imgs:
        {DOG._dogImg.map((img, index) => (
          <img
            key={index}
            data-src={img}
            className={`${styles.dog_img} lazyload`}
          />
        ))}
        <br />
        <h1>Dog Name: {DOG._dogName}</h1>
        <h1>Dog Breed: {DOG._dogBreed}</h1>
        <p>Dog Weight: {DOG._dogWeight}</p>
        <p>Dog Desc: {DOG._dogDesc}</p>
        <span>
          Dog Adoption Status:
          <span> {DOG._dogAdoptStatus}</span>
        </span>
        <br />
        <br />
        {DOG._dogAdoptStatus === "Available" ? (
          <button
            onClick={() => {
              // Setting the dog that is selected to be adopted for the contact page
              RemoveStorageVariable("session", "Adopt Select");
              DeclareStorageVariable("session", "Adopt Select", DOG._dogName);

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
      </main>
    </div>
  );
}

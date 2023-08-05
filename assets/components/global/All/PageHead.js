/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  ABOUT_KWS,
  CONTACT_KWS,
  ADOPT_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "Animal Ark: Summerlin's Pet Shelter & Animal Rescue. Find loving owners, adoptable pets, and community support. Join us in fostering responsible pet ownership!";
  const ABOUT_DESC =
    "Meet Susan Allison: The Compassionate Creator behind Animal Ark of Summerlin - A Remarkable Dog Rescue & Adoption Center. Join us in transforming neglected dogs' lives with love and dedication. Witness heartwarming tales of hope and a brighter future.";
  const CONTACT_DESC =
    "Adopting a Dog? Contact Us! Fill out the Inquiry Form to find your perfect match and simplify the adoption process.";
  const ADOPT_DESC =
    "Adopt your perfect dog today! Browse adoptable dogs, get details, and simplify the adoption process. Find a loving companion for life";
  const DESCS = [INDEX_DESC, ABOUT_DESC, CONTACT_DESC, ADOPT_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "Animal Ark of Summerlin - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }

  // About Page
  if (router.pathname == "/about") {
    title = "Animal Ark of Summerlin - About Us";
    robots = "index, follow";
    url = router.pathname;

    if (ABOUT_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    kws = ABOUT_KWS;
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "Animal Ark of Summerlin - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    kws = CONTACT_KWS;
  }
  // Adopt Page
  if (router.pathname == "/adopt") {
    title = "Animal Ark of Summerlin - Adopt";
    robots = "index, follow";
    url = router.pathname;

    if (ADOPT_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    kws = ADOPT_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "Animal Ark of Summerlin - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      {/**
      <meta
        name="google-site-verification"
        content="aPd101rbxmZ5gRWC4D6m_kW5i3UVNrrgnmA6CrJWz20"
      />
      */}
      {/**
        <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />
        */}

      <link rel="canonical" href={url} />

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
  );
};

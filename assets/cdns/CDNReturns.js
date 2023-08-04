/**
 *
 *  This is used to return/get a url for a medias
 *
 */

const SERVER =
  "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/animalarkofsummerlin/";

function CDNBGReturn(bgSub, bgSubFile, fileExt) {
  let bgSrc;

  if (bgSub) {
    if (bgSubFile) {
      if (fileExt) {
        bgSrc = SERVER + "bgs/" + bgSub + "/" + bgSubFile + "." + fileExt;
      }
    }
  }

  return bgSrc;
}

function CDNIconReturn(iconSub, iconSubFile, fileExt) {
  let iconSrc;

  if (iconSub) {
    if (iconSubFile) {
      if (fileExt) {
        iconSrc =
          SERVER + "icons/" + iconSub + "/" + iconSubFile + "." + fileExt;
      }
    }
  }

  return iconSrc;
}

function CDNImgReturn(imgSub, imgSubFile, fileExt) {
  let imgSrc;

  if (imgSub) {
    if (imgSubFile) {
      if (fileExt) {
        imgSrc = SERVER + "imgs/" + imgSub + "/" + imgSubFile + "." + fileExt;
      }
    }
  }

  return imgSrc;
}

function CDNVideoReturn(videoSub, videoSubFile, fileExt) {
  let videoSrc;

  if (videoSub) {
    if (videoSubFile) {
      if (fileExt) {
        videoSrc =
          SERVER + "videos/" + videoSub + "/" + videoSubFile + "." + fileExt;
      }
    }
  }

  return videoSrc;
}

export { CDNBGReturn, CDNIconReturn, CDNImgReturn, CDNVideoReturn }; // CDNImgReturn };

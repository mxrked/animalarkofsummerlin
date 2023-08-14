/**
 *
 *  This is used to change the dog top img
 *
 *  @param {Object} topImg - This is the top image element
 *  @param {Object} changeToImg - This is the replacement image
 *
 */

export default function ManipDogImg(topImg, changeToImg) {
  const TOP_IMG = document.getElementById(topImg);

  if (TOP_IMG) {
    const CHANGE_TO_IMG_WITHOUT_QUOTES = changeToImg.trim().replace(/"/g, "");

    TOP_IMG.style.backgroundImage = `url(${CHANGE_TO_IMG_WITHOUT_QUOTES})`;

    console.log(TOP_IMG.style.backgroundImage);
  }
}

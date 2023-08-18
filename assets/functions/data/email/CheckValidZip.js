/**
 *
 *  This is used to check for a valid zip code
 *
 *  @param {Object} zip - This is the zip code input element
 *
 */

export default function CheckValidZip(zip) {
  // Getting the value
  const ZIP_CODE = zip.value.trim();

  // Checking if the value is exactly 5 digits
  if (ZIP_CODE.length !== 5) {
    return false;
  }

  // Checking if value is only numbers
  if (!/^\d+$/.test(ZIP_CODE)) {
    return false;
  }

  return true;
}

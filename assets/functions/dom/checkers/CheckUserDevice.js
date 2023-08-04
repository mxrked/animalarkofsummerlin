/**
 *
 *  This is used to check what device the user is on
 *
 */

// Function imports
import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CheckUserDevice(mobile, desktop) {
  if (window.innerWidth > 991) {
    mobile = false;
    desktop = true;

    if (desktop) {
      RemoveStorageVariable("session", "Mobile Device");
      DeclareStorageVariable("session", "Desktop Device", true);
    }
  }

  if (window.innerWidth <= 990) {
    mobile = true;
    desktop = false;

    if (mobile) {
      RemoveStorageVariable("session", "Desktop Device");
      DeclareStorageVariable("session", "Mobile Device", true);
    }
  }
}

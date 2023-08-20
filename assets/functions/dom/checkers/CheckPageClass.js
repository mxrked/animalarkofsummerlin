/**
 *
 *  This is used to check if the user is on a mobile/desktop device and will remove/add the page class to PAGE
 *
 */

export default function CheckPageClass() {
  // Removing page class
  if (sessionStorage.getItem("Mobile Device")) {
    if (document.getElementById("PAGE")) {
      if (document.getElementById("PAGE").classList.contains("page")) {
        document.getElementById("PAGE").classList.remove("page");
      } else {
        return;
      }
    }
  }

  // Adding page class
  if (sessionStorage.getItem("Desktop Device")) {
    if (document.getElementById("PAGE")) {
      if (!document.getElementById("PAGE").classList.contains("page")) {
        document.getElementById("PAGE").classList.add("page");

        // Preventing hiding when resizing
        document.getElementById("PAGE").style.opacity = 1;
        document.getElementById("PAGE").style.visibility = "visible";
      } else {
        return;
      }
    }
  }
}

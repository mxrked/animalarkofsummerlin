/**
 *
 *  This is used to change the behavior of certain page link(s)
 *
 */

export default function ManipPageLink(manipState, type, linkClass) {
  if (manipState == "enable") {
    if (type == "single") {
      if (document.querySelector(linkClass)) {
        document.querySelector(linkClass).style.opacity = 1;
        document.querySelector(linkClass).style.pointerEvents = "auto";
      }
    }

    if (type == "multiple") {
      if (document.querySelector(linkClass)) {
        document.querySelectorAll(linkClass).forEach((link) => {
          link.style.opacity = 1;
          link.style.pointerEvents = "auto";
        });
      }
    }
  }

  if (manipState == "disable") {
    if (type == "single") {
      if (document.querySelector(linkClass)) {
        document.querySelector(linkClass).style.opacity = 0.5;
        document.querySelector(linkClass).style.pointerEvents = "none";
      }
    }

    if (type == "multiple") {
      if (document.querySelector(linkClass)) {
        document.querySelectorAll(linkClass).forEach((link) => {
          link.style.opacity = 0.5;
          link.style.pointerEvents = "none";
        });
      }
    }
  }
}

/**
 *
 *  This is used to trigger a inView framer-motion motion
 *
 */

export default function TriggerInViewMotion(controls, inview) {
  if (inview) {
    controls.start("visible");
  }
}

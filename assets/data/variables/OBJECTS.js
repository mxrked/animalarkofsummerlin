// This file is used to hold some objects

import {
  PLACEHOLDER,
  PLACEHOLDER_BLUE,
  PLACEHOLDER_GREEN,
  PLACEHOLDER_PURPLE,
  PLACEHOLDER_RED,
  MERLIN_1,
  PHOENIX_1,
  PHOENIX_2,
  SOPHIE_1,
  SOPHIE_2,
  SOPHIE_3,
} from "../../cdns/CDNImgs";

import Dog from "../classes/Dog";

const OBJ_MERLIN = new Dog(
  "_D0001",
  "Merlin",
  "Aussie/Border Collie",
  "?",
  "This Black and white beauty is Merlin, a part Aussie, part Border Collie who is 2 years old.",
  [MERLIN_1, PLACEHOLDER_GREEN, PLACEHOLDER_PURPLE, PLACEHOLDER_RED],
  "Available"
);
const OBJ_PHOENIX = new Dog(
  "_D0002",
  "Phoenix",
  "Beagle",
  "?",
  "Phoenix is now a beautiful happy Beagle who loves life.",
  [PHOENIX_1, PHOENIX_2, PLACEHOLDER_PURPLE, PLACEHOLDER_RED],
  "Available"
);
const OBJ_SOPHIE = new Dog(
  "_D0003",
  "Sophie",
  "Pit Mix",
  "?",
  "The Pit mix is Sophie who is also 2yo, tan and white, housetrained, and shy.",
  [SOPHIE_1, SOPHIE_2, SOPHIE_3, PLACEHOLDER_RED],
  "Available"
);

export { OBJ_MERLIN, OBJ_PHOENIX, OBJ_SOPHIE };

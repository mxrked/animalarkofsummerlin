/**
 *
 *  This is the Dog class
 *
 */

export default class Dog {
  constructor(
    dogID,
    dogName,
    dogBreed,
    dogWeight,
    dogDesc,
    dogImg,
    dogAdoptStatus
  ) {
    this._dogID = dogID;
    this._dogName = dogName;
    this._dogBreed = dogBreed;
    this._dogWeight = dogWeight;
    this._dogDesc = dogDesc;
    this._dogImg = dogImg;
    this._dogAdoptStatus = dogAdoptStatus;
  }

  get getDogID() {
    return this._dogID;
  }
  get getDogName() {
    return this._dogName;
  }
  get getDogBreed() {
    return this._dogBreed;
  }
  get getDogWeight() {
    return this._dogWeight;
  }
  get getDogDesc() {
    return this._dogDesc;
  }
  get getDogImg() {
    return this._dogImg;
  }
  get getDogAdoptStatus() {
    return this._dogAdoptStatus;
  }
}

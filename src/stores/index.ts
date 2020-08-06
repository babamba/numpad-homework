import NumPadStore from "./NumPadStore";

/**
 * 여러가지 분류로 나뉘어 있는 Store를 하나로 combine.
 */

class RootStore {
  numpadStore: any;
  constructor() {
    this.numpadStore = new NumPadStore(this);
  }
}

export default RootStore;

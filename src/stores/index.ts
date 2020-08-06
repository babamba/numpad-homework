import CommonStore from "./PhoneStore/store";

/**
 * 여러가지 분류로 나뉘어 있는 Store를 하나로 combine.
 */

class RootStore {
  common: any;
  constructor() {
    this.common = new CommonStore(this);
  }
}

export default RootStore;

import { observable, action } from "mobx";
class PhoneStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @observable number = "010";

  async setNumber(value: string) {
    this.number = value;
  }
}

export default PhoneStore;

import { observable, action, computed } from "mobx";
class NumberPadStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @observable originNumber = "010"; // 숫자만 가진 전화번호 입력값
  @observable hypenNumber = "010-"; // 하이픈 추가한 전화번호 입력값
  @observable useMaskingMode = false; // 전화번호 입력 노출 마스킹 처리 값
  @observable point = 100; // 적립 절차이후 보여질 포인트값
  @observable hasError = false; // 에러메시지가 보여질 처리 값
  @observable errorMsg = "";

  @action.bound
  ResetStore = () => {
    this.originNumber = "010";
    this.hypenNumber = "010-";
    this.useMaskingMode = false;
    this.hasError = false;
    this.errorMsg = "";
  };

  @action.bound
  SetMaskingMode = (value: boolean) => {
    this.useMaskingMode = value;
  };

  @action.bound
  SetError = (value: boolean, msg: string) => {
    this.errorMsg = msg;
    this.hasError = value;
  };

  @action.bound
  AddPoint = (value: number) => {
    this.point = this.point + value;
  };

  /**
   * 키패드 입력시 전화번호를 추가한다.
   */
  @action.bound
  AddNumber = (value: string) => {
    console.log("this.originNumber : ", this.originNumber);
    console.log("length  = ", this.originNumber.length);
    if (this.originNumber.length < 11) {
      this.originNumber = this.originNumber + value;
      const hypen = this.autoHypenPhone(this.originNumber);
      this.hypenNumber = hypen;
    }
  };

  /**
   * 키패드 입력시 전화번호를 삭제한다.
   */
  @action.bound
  DeleteNumber = () => {
    console.log("this.originNumber : ", this.originNumber);
    console.log("length  = ", this.originNumber.length);

    if (this.originNumber.length > 2) {
      const sliceStr = this.originNumber.slice(0, -1);
      this.originNumber = sliceStr;

      const hypen = this.autoHypenPhone(sliceStr);
      this.hypenNumber = hypen;
    }
  };

  // get autoHypenPhone() {

  autoHypenPhone = (str: string) => {
    str = str.replace(/[^0-9]/g, "");
    let temp = "";
    if (str.length < 4) {
      return str;
    } else if (str.length < 7) {
      temp += str.substr(0, 3);
      temp += "-";
      temp += str.substr(3);
      console.log("temp : ", temp);
    } else if (str.length < 11) {
      temp += str.substr(0, 3);
      temp += "-";
      temp += str.substr(3, 3);
      temp += "-";
      temp += str.substr(6);
      console.log("temp : ", temp);
    } else {
      temp += str.substr(0, 3);
      temp += "-";
      temp += str.substr(3, 4);
      temp += "-";
      temp += str.substr(7);
      console.log("temp : ", temp);
    }
    return temp;
  };
}

export default NumberPadStore;

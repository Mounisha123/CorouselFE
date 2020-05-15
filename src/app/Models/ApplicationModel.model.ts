export class ApplicationModel {
  appId: number;
  appName: string;
  appDesp: string;
  constructor(Aname?, Adesp?, Aid?) {
    this.appId = Aid;
    this.appName = Aname;
    this.appDesp = Adesp;
  }
}

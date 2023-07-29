  //isSummerTime
  function isSummerTime(utcTime:any):boolean {
    let dt:Date = new Date(utcTime);
    let y:number = dt.getFullYear();
    let m:string = ("00" + (dt.getMonth()+1)).slice(-2);
    let d:string = ("00" + dt.getDate()).slice(-2);
    let hh:string = ("00" + dt.getHours()).slice(-2);
    let mm:string = ("00" + dt.getMinutes()).slice(-2);
    let ss:string = ("00" + dt.getSeconds()).slice(-2);
    let offset:number = dt.getTimezoneOffset() / 60;
    let hh2:string = ("00" + (dt.getHours() - offset)).slice(-2);
    let dt2:Date = new Date(y + "-" + m + "-" + d + " " + hh2 + ":" + mm + ":" + ss);
    let dt3:Date = new Date(y + "-03-01 00:00:00");
    let dt4:Date = new Date(y + "-11-01 00:00:00");
    let isSummerTime:boolean = dt3 <= dt2 && dt2 < dt4;
    return isSummerTime;
  }

  function myDouble(a:number):number {
    return a * 2;
  }
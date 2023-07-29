  //isSummerTime
  function isSummerTime(utcTime:any):boolean {
    var dt:Date = new Date(utcTime);
    var y:number = dt.getFullYear();
    var m:string = ("00" + (dt.getMonth()+1)).slice(-2);
    var d:string = ("00" + dt.getDate()).slice(-2);
    var hh:string = ("00" + dt.getHours()).slice(-2);
    var mm:string = ("00" + dt.getMinutes()).slice(-2);
    var ss:string = ("00" + dt.getSeconds()).slice(-2);
    var offset:number = dt.getTimezoneOffset() / 60;
    var hh2:string = ("00" + (dt.getHours() - offset)).slice(-2);
    var dt2:Date = new Date(y + "-" + m + "-" + d + " " + hh2 + ":" + mm + ":" + ss);
    var dt3:Date = new Date(y + "-03-01 00:00:00");
    var dt4:Date = new Date(y + "-11-01 00:00:00");
    var isSummerTime:boolean = dt3 <= dt2 && dt2 < dt4;
    return isSummerTime;
  }

  function myDouble(a:number):number {
    return a * 2;
  }
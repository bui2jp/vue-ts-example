import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export class MyPDFCreater {
  constructor() {
    console.log("MyPDFCreater constructor");
  }
  createPDF() {
    console.log("createPDF ...");
    //日本語を含むPDFを作成する
    //pdfMake.fonts = {
    const currentHostname = window.location.hostname;
    console.log("currentHostname=" + currentHostname);
    const currentProtocol = window.location.protocol;
    console.log("currentProtocol=" + currentProtocol);
    const currentPort = window.location.port;
    console.log("currentPort=" + currentPort);
    const fontsPath = `${currentProtocol}//${currentHostname}:${currentPort}`;
    const fonts = {
      notoSansPJ: {
        normal: `${fontsPath}/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf`,
        bold: `${fontsPath}/fonts/Noto_Sans_JP/static/NotoSansJP-Bold.ttf`,
        italics: `${fontsPath}/fonts/Noto_Sans_JP/static/NotoSansJP-Thin.ttf`,
        bolditalics: `${fontsPath}/fonts/Noto_Sans_JP/static/NotoSansJP-Bold.ttf`,
      },
      IPAexfont004: {
        normal: `${fontsPath}/fonts/IPAexfont00401/ipaexg.ttf`,
        bold: `${fontsPath}/fonts/IPAexfont00401/ipaexg.ttf`,
        italics: `${fontsPath}/fonts/IPAexfont00401/ipaexg.ttf`,
        bolditalics: `${fontsPath}/fonts/IPAexfont00401/ipaexg.ttf`,
      },
      //   notoSansPJ: {
      //     normal:
      //       "http://localhost:8080/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf",
      //     bold: "http://localhost:8080/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf",
      //     italics:
      //       "http://localhost:8080//fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf",
      //     bolditalics:
      //       "http://localhost:8080/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf",
      //   },
    };
    const docDefinition = {
      content: [
        "First paragraph",
        "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
        { text: "notoSansPJを利用して日本語を表示" },
        {
          text: "notoSansPJを利用して日本語を表示 (bold指定)",
          style: { bold: true },
        },
        {
          text: "notoSansPJを利用して日本語を表示 (NotoSansJP-Thin指定)",
          style: { italics: true },
        },
        {
          text: "IPAexfont004を利用して日本語を表示",
          font: "IPAexfont004",
        },
        {
          image: "myIcon1",
          width: 200,
        },
        {
          image: "myIcon2",
          width: 200,
        },
        {
          image: "myIcon3",
          width: 200,
        },
      ],
      images: {
        myIcon1: "http://localhost:8080/icons/free-delivery.png",
        myIcon2: "http://localhost:8080/icons/free-delivery.png",
        myIcon3: "http://localhost:8080/icons/free-delivery.png",
      },
      defaultStyle: {
        font: "notoSansPJ",
      },
      styles: {
        bold: {
          bold: true,
        },
      },
    };
    pdfMake.createPdf(docDefinition, {}, fonts).open();
  }
}

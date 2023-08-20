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
    const fonts = {
      notoSansPJ: {
        normal: `${currentProtocol}//${currentHostname}:${currentPort}/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf`,
        bold: `${currentProtocol}//${currentHostname}:${currentPort}/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf`,
        italics: `${currentProtocol}//${currentHostname}:${currentPort}/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf`,
        bolditalics: `${currentProtocol}//${currentHostname}:${currentPort}/fonts/Noto_Sans_JP/static/NotoSansJP-Regular.ttf`,
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
        "ここに日本語を表示します(notoSansPJを利用しています)",
      ],
      defaultStyle: {
        font: "notoSansPJ",
      },
    };
    pdfMake.createPdf(docDefinition, {}, fonts).open();
  }
}

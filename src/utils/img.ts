import JSZip from 'jszip';
import FileSaver from 'file-saver';

interface Img {
  fileName: string;
  base64: string;
}

/**
 * 多个图片压缩成zip导出
 * @param arr base64图片
 * @param zipName 压缩包名称
 */
export default function downloadImgZip(arr: Array<Img>, zipName = '图片.zip') {
  const zip = new JSZip();
  arr.forEach(({ fileName, base64 }) => {
    zip.file(fileName, splitBase64(base64), { base64: true });
  });
  zip.generateAsync({ type: 'blob' }).then((content) => {
    FileSaver.saveAs(content, zipName);
  });
}

function splitBase64(base64: string) {
  if (base64.indexOf(';base64,') > -1) {
    base64 = base64.split(';base64,')[1];
  }
  return base64;
}

import * as XLSX from 'xlsx';

export function readExcelFile(event: any): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      try {
        const workBook = XLSX.read(fileReader.result, { type: 'binary' });
        const sheetName = workBook.SheetNames[0];
        const data = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsBinaryString(file);
  });
}

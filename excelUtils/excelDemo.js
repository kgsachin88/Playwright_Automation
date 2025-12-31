const Exceljs = require('exceljs');

async function readExcel() {

const wb = new Exceljs.Workbook();
await wb.xlsx.readFile('C:/Automation/Playwright_Automation/downloads/Test.xlsx');
const ws = wb.getWorksheet('Sheet1');
ws.eachRow((row, rowNumber) => {

    row.eachCell((cell, colNumber) => {
        console.log(cell.value);
    });
 });
} 
readExcel();
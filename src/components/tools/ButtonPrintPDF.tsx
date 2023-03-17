import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

import { Button } from '@mui/material';

const printDocument = ():void => {
  const input = document.getElementById('divToPrint');
  if (input) {
    html2canvas(input, { logging: true, useCORS: true })
      .then((canvas) => {
        const imgWidth = 210;
        const imgHeight = 297;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new JsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save('download.pdf');
      });
  }
};
function ButtonPrintPDF():JSX.Element {
  return (
    <Button
      onClick={printDocument}
      sx={{
        border: '1px solid navajowhite',
      }}
    >
      CREATE PDF
    </Button>
  );
}
export default ButtonPrintPDF;

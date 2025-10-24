// === PDF Converter Script ===

// Global variables
let selectedFile = null;
let conversionResult = null;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.getElementById('fileUpload');
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const previewBtn = document.getElementById('previewBtn');
  const alertContainer = document.getElementById('alertContainer');

  // Handle file selection
  fileInput.addEventListener('change', function (e) {
    if (e.target.files.length > 0) {
      selectedFile = e.target.files[0];
      showAlert(`✅ File selected: ${selectedFile.name}`, 'success');
      convertBtn.disabled = false;
    }
  });

  // Handle conversion
  convertBtn.addEventListener('click', async function () {
    if (!selectedFile) {
      showAlert('⚠️ Please select a file first.', 'danger');
      return;
    }

    const fileType = selectedFile.name.split('.').pop().toLowerCase();

    showAlert('⏳ Converting file... Please wait.', 'info');

    try {
      if (fileType === 'html' || fileType === 'htm') {
        await convertHTMLToPDF(selectedFile);
      } else if (fileType === 'docx') {
        await convertWordToPDF(selectedFile);
      } else if (fileType === 'xlsx' || fileType === 'xls') {
        await convertExcelToPDF(selectedFile);
      } else {
        showAlert('❌ Unsupported file type. Try HTML, DOCX, or XLSX.', 'danger');
        return;
      }

      showAlert('✅ Conversion complete! You can now download or preview the PDF.', 'success');
      downloadBtn.disabled = false;
      previewBtn.disabled = false;
    } catch (err) {
      console.error(err);
      showAlert('❌ Conversion failed. Please try again.', 'danger');
    }
  });

  // Download PDF
  downloadBtn.addEventListener('click', function () {
    if (conversionResult) {
      const filename = 'converted.pdf';
      download(conversionResult, filename, 'application/pdf');
    }
  });

  // Preview PDF
  previewBtn.addEventListener('click', function () {
    if (conversionResult) {
      const blob = new Blob([conversionResult], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }
  });

  // Alert helper
  function showAlert(message, type) {
    alertContainer.innerHTML = `
      <div class="alert alert-${type}" role="alert">${message}</div>
    `;
  }
});

// === Conversion Functions ===

// HTML → PDF
async function convertHTMLToPDF(file) {
  const reader = new FileReader();
  reader.onload = async function (e) {
    const content = e.target.result;
    const element = document.createElement('div');
    element.innerHTML = content;
    conversionResult = await html2pdf().from(element).outputPdf('arraybuffer');
  };
  reader.readAsText(file);
}

// Word → PDF
async function convertWordToPDF(file) {
  const reader = new FileReader();
  reader.onload = async function (e) {
    const arrayBuffer = e.target.result;
    const result = await mammoth.convertToHtml({ arrayBuffer });
    const element = document.createElement('div');
    element.innerHTML = result.value;
    conversionResult = await html2pdf().from(element).outputPdf('arraybuffer');
  };
  reader.readAsArrayBuffer(file);
}

// Excel → PDF
async function convertExcelToPDF(file) {
  const reader = new FileReader();
  reader.onload = async function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    let html = '';
    workbook.SheetNames.forEach(function (sheetName) {
      html += XLSX.utils.sheet_to_html(workbook.Sheets[sheetName]);
    });
    const element = document.createElement('div');
    element.innerHTML = html;
    conversionResult = await html2pdf().from(element).outputPdf('arraybuffer');
  };
  reader.readAsArrayBuffer(file);
}

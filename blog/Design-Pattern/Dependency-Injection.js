/** ExcelJS library **/
class ExcelJS {
  export(data) {
    console.log('Exporting data to excel file,', `data: ${data}`);
  }
}

/** Tanpa Dependency Injection **/
class Report {
  // Get daily report
  getDailyReport() {
    // Membuat instance ExcelJS
    const exceljs = new ExcelJS();
    // Data
    const data = ['daily report'];
    // Export data to excel
    exceljs.export(data);
  }

  // Get monthly report
  getMonthlyReport() {
    // Membuat instance ExcelJS
    const exceljs = new ExcelJS();
    // Data
    const data = ['monthly report'];
    // Export data to excel
    exceljs.export(data);
  }
}

// Create Report instance
const report = new Report();
// Generate daily report
report.getDailyReport();
// Generate monthly report
report.getMonthlyReport();



/** Dengan Dependency Injection **/
class Report2 {
  // ExcelJS instance
  #exceljs;

  constructor(ExcelJS) {
    // Set exceljs.
    this.#exceljs = ExcelJS;
  }

  // Get daily report
  getDailyReport() {
    // Data
    const data = ['daily report'];
    // Export data to excel
    this.#exceljs.export(data);
  }

  // Get monthly report
  getMonthlyReport() {
    // Data
    const data = ['monthly report'];
    // Export data to excel
    this.#exceljs.export(data);
  }
}

// Create Report instance
const report2 = new Report2(new ExcelJS());
// Generate daily report
report2.getDailyReport();
// Generate monthly report
report2.getMonthlyReport();

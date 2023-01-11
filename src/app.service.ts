import { Injectable } from "@nestjs/common";
import { data, ReportType } from "src/data";
import { v4 as uuid} from "uuid";

interface Report { amount: number, source: string}
@Injectable()
export class AppService {
  getAllReports( type: ReportType){
    return data.report.filter((report) => report.type === type);
  }

  getReportById(type: ReportType, id: string){
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }

  createReport(type: ReportType, {amount, source}: Report){
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };

    data.report.push(newReport);
    return newReport;
  }

  updateReport(type: ReportType, id: string, body: Report){
    const updateReport = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!updateReport) return;

    const reportIndex = data.report.findIndex((report) => report.id === updateReport.id)

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return data.report[reportIndex];
  }

  deleteReport(id: string){
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if(reportIndex === -1) return;

    data.report.splice(reportIndex, 1);

    return;
  }
}

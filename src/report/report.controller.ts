import { Body, Controller, Delete, Get, Param, Post, Put, ParseUUIDPipe, ParseEnumPipe} from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { ReportType } from "src/data";
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from "src/dtos/report.dto";

import {ReportService} from "./report.service";
@Controller('report/:type')
export class ReportController {  

  constructor( private readonly reportService: ReportService){}

  @Get()
  getAllIncomeReports( @Param('type') type: string,):ReportResponseDto []{
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getAllReports(reportType);
  }

  @Get(':id')
  getIncomeReportById( @Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string,):ReportResponseDto {

    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getReportById(reportType, id);


  }

  @Post()
  createReport( @Body() {amount, source}: CreateReportDto, @Param('type') type:string):ReportResponseDto{
    const reportType = 
    type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, {amount, source});
  }

  @Put(':id')
  updateReport( @Param('id') id: string, @Param("type") type : string, @Body() body: UpdateReportDto,):ReportResponseDto{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this.reportService.updateReport(reportType, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param("id") id: string){
    return this.reportService.deleteReport(id);
  }


}
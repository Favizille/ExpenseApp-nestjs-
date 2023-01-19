import { Body, Controller, Delete, Get, Param, Post, Put, ParseUUIDPipe, ParseEnumPipe} from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { ReportType } from "src/data";
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from "./dtos/report.dto";

import {AppService} from "./app.service"
@Controller('report/:type')
export class AppController {  

  constructor( private readonly appService: AppService){}

  @Get()
  getAllIncomeReports( @Param('type') type: string,):ReportResponseDto []{
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getIncomeReportById( @Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string,):ReportResponseDto {
    console.log(id, typeof id);
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  createReport( @Body() {amount, source}: CreateReportDto, @Param('type') type:string):ReportResponseDto{
    const reportType = 
    type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, {amount, source});
  }

  @Put(':id')
  updateReport( @Param('id') id: string, @Param("type") type : string, @Body() body: UpdateReportDto,):ReportResponseDto{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this.appService.updateReport(reportType, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param("id") id: string){
    return this.appService.deleteReport(id);
  }


}
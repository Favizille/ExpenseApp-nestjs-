import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {  
  @Get()
  getAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getIncomeReportsById() {
    return {};
  }

  @Post()
  createReport(){
    return "Post";
  }

  @Put(':id')
  updateReport(){
    return "update income";
  }

  @Delete(':id')
  deleteIncome(){
    return "deleted income";
  }
}
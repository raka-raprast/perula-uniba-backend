import { Body, Controller, Post } from '@nestjs/common';
import { DataService } from './data.service';
import { SendDataDto } from './dto/send-data.dto';
import { GetDataDto } from './dto/get-data.dto';

@Controller()
export class DataController {
  constructor(private dataService: DataService) {}
  @Post('/sendData')
  async sendData(@Body() sendDataDto: SendDataDto) {
    return this.dataService.sendData(sendDataDto);
  }

  @Post('/getData')
  async getData(@Body() getDataDto: GetDataDto) {
    return this.dataService.getData(getDataDto);
  }
}

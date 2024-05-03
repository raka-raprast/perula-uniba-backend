import { Body, Controller, Post, Put } from '@nestjs/common';
import { ControlService } from './control.service';
import { UpdateControlDto } from './dto/update-control.dto';
import { GetControlDto } from './dto/get-control.dto';

@Controller()
export class ControlController {
  constructor(private controlService: ControlService) {}

  @Post('/getControl')
  async getControl(@Body() getControlDto: GetControlDto) {
    return this.controlService.getControl(getControlDto);
  }
  @Put('/updateControl')
  async updateControl(@Body() updateControlDto: UpdateControlDto) {
    return this.controlService.updateControl(updateControlDto);
  }
}

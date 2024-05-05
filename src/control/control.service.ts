import { Injectable } from '@nestjs/common';
import { UpdateControlDto } from './dto/update-control.dto';
import { GetControlDto } from './dto/get-control.dto';
import { Control } from './schema/control.schema';

@Injectable()
export class ControlService {
  // constructor(@InjectModel('Control') private controlModel: Model<IControl>) {}
  controlData: Control[] = [];
  updateDataObject(userId, toolId, newData) {
    for (let i = 0; i < this.controlData.length; i++) {
      if (
        this.controlData[i].userId == userId &&
        this.controlData[i].toolId == toolId
      ) {
        this.controlData[i] = newData;
        break;
      }
    }
  }
  async getControl(getControlDto: GetControlDto): Promise<any> {
    const existingControl = this.controlData.filter(
      (item) =>
        item.userId == getControlDto.userId &&
        item.toolId == getControlDto.toolId,
    );
    if (existingControl == null || existingControl.length == 0) {
      const newControl = {
        userId: getControlDto.userId,
        toolId: getControlDto.toolId,
        fanStatus: false,
        heaterStatus: false,
      };
      await this.controlData.push(newControl);
      return newControl;
    }
    return existingControl[0];
  }
  async updateControl(updateControlDto: UpdateControlDto): Promise<any> {
    const existingControl = await this.controlData.filter(
      (item) =>
        item.userId == updateControlDto.userId &&
        item.toolId == updateControlDto.toolId,
    );
    if (existingControl == null || existingControl.length == 0) {
      const newData = {
        userId: updateControlDto.userId,
        toolId: updateControlDto.toolId,
        fanStatus: updateControlDto.fanStatus,
        heaterStatus: updateControlDto.heaterStatus,
      };
      await this.controlData.push(newData);
      return newData;
    }
    const updateData = {
      userId: updateControlDto.userId,
      toolId: updateControlDto.toolId,
      fanStatus: updateControlDto.fanStatus,
      heaterStatus: updateControlDto.heaterStatus,
    };
    this.updateDataObject(
      updateControlDto.userId,
      updateControlDto.toolId,
      updateData,
    );
    // console.log(updateData);
    return updateData;
  }
}

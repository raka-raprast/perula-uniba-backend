import { Injectable } from '@nestjs/common';
import { SendDataDto } from './dto/send-data.dto';
import { GetDataDto } from './dto/get-data.dto';
import { Data } from './schema/data.schema';
// import { IData } from './interface/data.interface';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DataService {
  // constructor(@InjectModel('Data') private dataModel: Model<IData>) {}
  dataList: Data[] = [];
  getDataForPage(pageNumber, pageSize, userId) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.dataList
      .filter((item) => item.userId == userId)
      .slice(startIndex, endIndex);
  }
  async sendData(sendDataDto: SendDataDto): Promise<any> {
    const dateTime = new Date();
    console.log('Date time');
    console.log(dateTime);
    const newData = {
      userId: sendDataDto.userId,
      toolId: sendDataDto.toolId,
      temperature: sendDataDto.temperature,
      humidity: sendDataDto.humidity,
      fanStatus: sendDataDto.fanStatus,
      heaterStatus: sendDataDto.heaterStatus,
      addedTime: dateTime.toISOString(),
    };
    await this.dataList.push(newData);
    console.log(this.dataList);
    return newData;
  }

  async getData(getDataDto: GetDataDto) {
    // TODO: Handle Pagination
    const existingData = this.getDataForPage(
      getDataDto.page,
      50,
      getDataDto.userId,
    );
    return existingData
      .filter((item) => item.userId == getDataDto.userId)
      .sort((a, b) => {
        const timeA = new Date(a.addedTime).getTime();
        const timeB = new Date(b.addedTime).getTime();
        return timeA - timeB;
      });
  }
}

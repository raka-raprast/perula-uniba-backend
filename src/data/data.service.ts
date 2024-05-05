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
    let endIndex = 0;
    if (this.dataList.length <= pageSize) {
      endIndex = this.dataList.length;
    } else {
      endIndex = startIndex + pageSize;
    }
    // console.log(this.dataList.length);
    console.log('dataListLength:');
    console.log(this.dataList.length);
    console.log('endIndex:');
    console.log(endIndex);
    const existingData = this.dataList
      .filter((item) => item.userId == userId)
      .slice(0, endIndex);
    // console.log(existingData);
    return existingData;
  }
  async sendData(sendDataDto: SendDataDto): Promise<any> {
    const dateTime = new Date();
    // console.log('Date time');
    // console.log(dateTime);
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
    // console.log(this.dataList);
    return newData;
  }

  async getData(getDataDto: GetDataDto) {
    // TODO: Handle Pagination
    const existingData = this.getDataForPage(
      getDataDto.page,
      10,
      getDataDto.userId,
    ).sort((a, b) => {
      const timeA = new Date(a.addedTime).getTime();
      const timeB = new Date(b.addedTime).getTime();
      return timeA - timeB;
    });
    return {
      isReachedMax: getDataDto.page * 10 >= this.dataList.length,
      data: existingData,
    };
  }
}

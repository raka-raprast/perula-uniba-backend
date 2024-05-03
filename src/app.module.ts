import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { ControlModule } from './control/control.module';
// import { DataSchema } from './data/schema/data.schema';
import { ConfigModule } from '@nestjs/config';
// import { ControlSchema } from './control/schema/control.schema';

@Module({
  imports: [
    DataModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRoot(
    //   // 'mongodb+srv://raprast:raka8874@cluster0.o6gk0eb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    //   'mongodb+srv://raprast:raka8874@cluster0.o6gk0eb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    // ),
    // MongooseModule.forFeature([{ name: 'Data', schema: DataSchema }]),
    ControlModule,
    // MongooseModule.forFeature([{ name: 'Control', schema: ControlSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

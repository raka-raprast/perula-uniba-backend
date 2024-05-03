import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlController } from './control.controller';
// import { ControlSchema } from './schema/control.schema';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [
  //   MongooseModule.forFeature([{ name: 'Control', schema: ControlSchema }]),
  // ],
  controllers: [ControlController],
  providers: [ControlService],
  exports: [ControlService],
})
export class ControlModule {}

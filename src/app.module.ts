import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotController } from './parking_lot/parking_lot.controller';

@Module({
  imports: [],
  controllers: [AppController, ParkingLotController],
  providers: [AppService],
})
export class AppModule {}

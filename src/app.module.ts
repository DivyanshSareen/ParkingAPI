import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotController } from './parking_lot/parking_lot.controller';
import { ParkController } from './park/park.controller';
import { RegistrationNumberController } from './registration_number/registration_number.controller';
import { SlotNumbersController } from './slot_numbers/slot_numbers.controller';
import { ClearController } from './clear/clear.controller';
import { StatusController } from './status/status.controller';

@Module({
  imports: [],
  controllers: [AppController, ParkingLotController, ParkController, RegistrationNumberController, SlotNumbersController, ClearController, StatusController],
  providers: [AppService],
})
export class AppModule {}

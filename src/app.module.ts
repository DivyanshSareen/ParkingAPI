import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingLotController } from './parking_lot/parking_lot.controller';
import { ParkController } from './park/park.controller';
import { RegistrationNumberController } from './registration_number/registration_number.controller';
import { SlotNumbersController } from './slot_numbers/slot_numbers.controller';
import { ClearController } from './clear/clear.controller';
import { StatusController } from './status/status.controller';
import { ParkingLotService } from './parking_lot/parking_lot.service';
import { ParkService } from './park/park.service';
import { RegistrationNumberService } from './registration_number/registration_number.service';
import { SlotNumbersService } from './slot_numbers/slot_numbers.service';
import { ClearService } from './clear/clear.service';

@Module({
  imports: [],
  controllers: [AppController, ParkingLotController, ParkController, RegistrationNumberController, SlotNumbersController, ClearController, StatusController],
  providers: [AppService, ParkingLotService, ParkService, RegistrationNumberService, SlotNumbersService, ClearService],
})
export class AppModule {}

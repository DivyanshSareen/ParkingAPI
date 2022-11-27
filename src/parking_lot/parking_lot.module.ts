import { Module } from '@nestjs/common';
import { ParkingLotController } from './parking_lot.controller';
import { ParkingLotService } from './parking_lot.service';

@Module({
    imports: [],
    controllers: [ParkingLotController],
    providers: [ParkingLotService],
})
export class ParkingLotModule { }

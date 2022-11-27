import { Module } from '@nestjs/common';
import { ParkService } from '../park/park.service';
import { ParkingLotController } from './parking_lot.controller';
import { ParkingLotService } from './parking_lot.service';

@Module({
    imports: [],
    controllers: [ParkingLotController],
    providers: [ParkingLotService, ParkService],
})
export class ParkingLotModule { }

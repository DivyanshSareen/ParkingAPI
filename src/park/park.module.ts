import { Module } from '@nestjs/common';
import { ParkController } from './park.controller';
import { ParkService } from './park.service';
import { ParkingLotService } from '../parking_lot/parking_lot.service';

@Module({
    imports: [],
    controllers: [ParkController],
    providers: [ParkingLotService, ParkService],
})
export class ParkModule { }

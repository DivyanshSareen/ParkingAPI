import { Body, Controller, Post } from '@nestjs/common';
import { AllocateParking } from './dto/allocate-parking.dto';
import { ParkService } from './park.service';
import { Park } from './interface/park.interface';
import { ParkingLotService } from '../parking_lot/parking_lot.service';
import { ServerMessage } from '../interface/server_message.interface';
@Controller('park')
export class ParkController {
    constructor(private parkingLotService: ParkingLotService, private parkService: ParkService) { }

    @Post()
    allocate(@Body() allocateParking: AllocateParking): Park | ServerMessage {
        const { registration_no, color } = allocateParking;
        const { total_slot } = this.parkingLotService.getTotalSlot();
        return this.parkService.allocate(total_slot, registration_no, color);
    }
}

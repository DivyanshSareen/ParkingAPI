import { Controller, Post, Body } from '@nestjs/common';
import { ParkService } from 'src/park/park.service';
import { ParkingLotService } from 'src/parking_lot/parking_lot.service';
import { Clear } from './dto/clear.dto';
import { FreedSlot } from './interface/freed-slot.interface';
import { ServerMessage } from '../interface/server_message.interface';

@Controller('clear')
export class ClearController {
    constructor(private parkService: ParkService, private parkingLotService: ParkingLotService) { }

    @Post()
    clearSlot(@Body() slot_number: Clear): FreedSlot | ServerMessage {
        const { slot_no } = slot_number;
        const { total_slot } = this.parkingLotService.getTotalSlot();
        return this.parkService.clearSlot(slot_no, total_slot)
    }
}

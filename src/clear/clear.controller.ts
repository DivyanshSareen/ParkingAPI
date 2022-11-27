import { Controller, Post, Body } from '@nestjs/common';
import { ParkService } from 'src/park/park.service';
import { ParkingLotService } from 'src/parking_lot/parking_lot.service';

@Controller('clear')
export class ClearController {
    constructor(private parkService: ParkService, private parkingLotService: ParkingLotService) { }

    @Post()
    clearSlot(@Body() slot_number) {
        const { slot_no } = slot_number;
        const { total_slot } = this.parkingLotService.getTotalSlot();
        return this.parkService.clearSlot(slot_no, total_slot)
    }
}

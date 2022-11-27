import { Controller, Get, Param } from '@nestjs/common';
import { SlotNumbersService } from './slot_numbers.service';
import { ParkService } from 'src/park/park.service';
@Controller('slot_numbers')
export class SlotNumbersController {
    constructor(private slotNumberService: SlotNumbersService, private parkService: ParkService) { }

    @Get(':color')
    findAll(@Param('color') color: string): string[] {
        return this.slotNumberService.findAll(this.parkService.getStatus(), color)
    }
}

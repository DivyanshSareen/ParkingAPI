import { Module } from '@nestjs/common';
import { SlotNumbersController } from './slot_numbers.controller';
import { ParkService } from '../park/park.service';
import { SlotNumbersService } from './slot_numbers.service';

@Module({
    imports: [],
    controllers: [SlotNumbersController],
    providers: [ParkService, SlotNumbersService],
})
export class SlotNumberModule { }
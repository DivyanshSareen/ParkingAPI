import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateParkingLotDto } from './dto/create-parking_lot.dto';
import { ChangeParkingLotDto } from './dto/change-parking_lot.dto';
import { ParkingLotService } from './parking_lot.service';
import { ParkingLot } from './interfaces/parking_lot.interface';
import { ParkService } from 'src/park/park.service';
@Controller('parking_lot')
export class ParkingLotController {
    constructor(private parkingLotService: ParkingLotService, private parkService: ParkService) { }

    @Post()
    create(@Body() createParkingLotDto: CreateParkingLotDto): ParkingLot {
        this.parkService.initialise(createParkingLotDto.no_of_slot, 0)
        return this.parkingLotService.create(createParkingLotDto);
    }
    @Patch()
    change(@Body() changeParkingLotDto: ChangeParkingLotDto): ParkingLot {
        this.parkService.initialise(changeParkingLotDto.increment_slot, this.parkingLotService.getTotalSlot().total_slot)
        return this.parkingLotService.change(changeParkingLotDto)
    }
}

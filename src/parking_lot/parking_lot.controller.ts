import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateParkingLotDto } from './dto/create-parking_lot.dto';
import { ChangeParkingLotDto } from './dto/change-parking_lot.dto';
import { ParkingLotService } from './parking_lot.service';
import { ParkingLot } from './interfaces/parking_lot.interface';
@Controller('parking_lot')
export class ParkingLotController {
    constructor(private parkingLotService: ParkingLotService) { }

    @Post()
    create(@Body() createParkingLotDto: CreateParkingLotDto): ParkingLot {
        return this.parkingLotService.create(createParkingLotDto);
    }
    @Patch()
    change(@Body() changeParkingLotDto: ChangeParkingLotDto): ParkingLot {
        return this.parkingLotService.change(changeParkingLotDto)
    }
}

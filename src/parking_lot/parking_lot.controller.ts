import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateParkingLotDto } from './dto/create-parking_lot.dto';
import { ChangeParkingLotDto } from './dto/change-parking_lot.dto';
@Controller('parking_lot')
export class ParkingLotController {
    @Post()
    create(@Body() createParkingLotDto: CreateParkingLotDto): object {
        return {
            total_slot: createParkingLotDto.no_of_slot
        }
    }
    @Patch()
    change(@Body() changeParkingLotDto: ChangeParkingLotDto): object {
        return {
            total_slot: changeParkingLotDto.increment_slot
        }
    }
}

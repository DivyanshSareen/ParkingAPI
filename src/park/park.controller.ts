import { Body, Controller, Post } from '@nestjs/common';
import { AllocateParking } from './dto/allocate-parking.dto';
@Controller('park')
export class ParkController {
    @Post()
    allocate(@Body() allocateParking: AllocateParking) {
        return ""
    }
}

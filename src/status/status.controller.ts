import { Controller, Get } from '@nestjs/common';
import { ParkService } from 'src/park/park.service';
import { Park } from '../park/interface/park.interface';

@Controller('status')
export class StatusController {
    constructor(private parkService: ParkService) { }

    @Get()
    getStatus(): Park[] {
        return this.parkService.getStatus();
    }
}

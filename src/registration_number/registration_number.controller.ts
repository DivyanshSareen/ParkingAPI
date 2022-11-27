import { Controller, Get, Param } from '@nestjs/common';
import { ParkService } from '../park/park.service';
import { RegistrationNumberService } from "../registration_number/registration_number.service";
@Controller('registration_number')
export class RegistrationNumberController {
    constructor(private registrationNumberService: RegistrationNumberService, private parkService: ParkService) { }

    @Get(':color')
    findAll(@Param('color') color: string): string[] {
        return this.registrationNumberService.findAll(this.parkService.getStatus(), color)
    }
}

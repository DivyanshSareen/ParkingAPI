import { Module } from '@nestjs/common';
import { RegistrationNumberController } from './registration_number.controller';
import { ParkService } from '../park/park.service';
import { RegistrationNumberService } from './registration_number.service';

@Module({
    imports: [],
    controllers: [RegistrationNumberController],
    providers: [ParkService, RegistrationNumberService],
})
export class RegistrationNumberModule { }

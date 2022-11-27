import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { ParkService } from '../park/park.service';

@Module({
    imports: [],
    controllers: [StatusController],
    providers: [ParkService],
})
export class StatusModule { }


import { Module } from '@nestjs/common';
import { ClearController } from './clear.controller';
import { ParkService } from '../park/park.service';
import { ClearService } from './clear.service';

@Module({
    imports: [],
    controllers: [ClearController],
    providers: [ParkService, ClearService],
})
export class ClearModule { }

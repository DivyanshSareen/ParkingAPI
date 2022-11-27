import { Module } from '@nestjs/common';
import { ClearController } from './clear.controller';
import { ParkService } from '../park/park.service';

@Module({
    imports: [],
    controllers: [ClearController],
    providers: [ParkService],
})
export class ClearModule { }

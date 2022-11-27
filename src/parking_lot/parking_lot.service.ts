import { Injectable } from '@nestjs/common';
import { ParkingLot } from './interfaces/parking_lot.interface';
import { CreateParkingLotDto } from './dto/create-parking_lot.dto';
import { ChangeParkingLotDto } from './dto/change-parking_lot.dto';

@Injectable()
export class ParkingLotService {
    private total_slot: number = 0;

    getTotalSlot(): ParkingLot {
        return { total_slot: this.total_slot };
    }
    create(obj: CreateParkingLotDto): ParkingLot {
        this.total_slot = obj.no_of_slot;
        return { total_slot: this.total_slot }
    }
    change(obj: ChangeParkingLotDto): ParkingLot {
        this.total_slot += obj.increment_slot;
        return { total_slot: this.total_slot }
    }
}

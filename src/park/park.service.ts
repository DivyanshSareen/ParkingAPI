import { Injectable } from '@nestjs/common';
import { ClearSlot } from './interface/clear_slot.interface';
import { Park } from './interface/park.interface';
import { ServerMessage } from './interface/server_message.interface';

@Injectable()
export class ParkService {
    private occupied_slots: Park[] = [];
    private clear_slots: ClearSlot[] = [];

    initialise(): Park {
        return {
            "slot_no": 12,
            "registration_no": "KA-01-HH-1235",
            "color": "black"
        }
    }
    allocate(total_slot, registration_no, color): Park | ServerMessage {
        if (this.clear_slots.length <= 0) {
            return { message: "The parking lot is full! Please come again later." };
        }
        return {
            "slot_no": total_slot,
            "registration_no": registration_no,
            "color": color
        }
    }
}

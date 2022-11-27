import { Injectable } from '@nestjs/common';
import { ClearSlot } from './interface/clear_slot.interface';
import { Park } from './interface/park.interface';
import { ServerMessage } from './interface/server_message.interface';

@Injectable()
export class ParkService {
    private occupied_slots: Park[] = [];
    private clear_slots: ClearSlot[] = [];

    initialise(increment_value, total_slot) {
        for (let i = 1; i <= increment_value; i++) {
            this.clear_slots.push({ slot_no: i + total_slot });
        }
    }
    allocate(total_slot, registration_no, color): Park | ServerMessage {
        if (this.clear_slots.length <= 0) {
            return { message: "The parking lot is full! Please come again later." };
        }
        else {
            let { slot_no } = this.clear_slots.shift();
            let new_slot: Park = { slot_no, registration_no, color };
            this.occupied_slots.push(new_slot);
            return new_slot;
        }
    }
    getStatus(): Park[] {
        return this.occupied_slots;
    }
}

import { Injectable } from '@nestjs/common';
import { ClearSlot } from './interface/clear_slot.interface';
import { Park } from './interface/park.interface';
import { ServerMessage } from '../interface/server_message.interface';
import { FreedSlot } from 'src/clear/interface/freed-slot.interface';

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
    clearSlot(slot_no: number, total_slot: number): FreedSlot | ServerMessage {
        if (slot_no > total_slot) {
            return { message: "The requested slot number does not exist" };
        }
        const slotIndex = this.occupied_slots.findIndex(slot => slot.slot_no === slot_no);
        if (slotIndex === -1) {
            return { message: "The requested slot is already empty" };
        }
        else {
            const slotDetails: Park = this.occupied_slots[slotIndex];
            this.clear_slots.push({ slot_no: slotDetails.slot_no });
            this.occupied_slots.splice(slotIndex, 1);
            return { freed_slot_no: slotDetails.slot_no };
        }
    }
}

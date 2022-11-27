import { Injectable } from '@nestjs/common';

@Injectable()
export class SlotNumbersService {
    findAll(occupied_slots, color) {
        return occupied_slots.reduce((acc, slot) => slot.color === color ? [...acc, slot.slot_no] : acc, [])
    }
}

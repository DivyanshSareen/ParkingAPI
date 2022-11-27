import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationNumberService {
    findAll(occupied_slots, color) {
        return occupied_slots.reduce((acc, slot) => slot.color === color ? [...acc, slot.registration_no] : acc, [])
    }
}

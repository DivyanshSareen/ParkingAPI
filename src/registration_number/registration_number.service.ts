import { Injectable } from '@nestjs/common';
import { Park } from 'src/park/interface/park.interface';

@Injectable()
export class RegistrationNumberService {
    findAll(occupied_slots: Park[], color: string): string[] {
        return occupied_slots.reduce((acc, slot) => slot.color === color ? [...acc, slot.registration_no] : acc, [])
    }
}

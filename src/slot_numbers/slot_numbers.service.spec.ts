import { Test, TestingModule } from '@nestjs/testing';
import { SlotNumbersService } from './slot_numbers.service';

describe('SlotNumbersService', () => {
  let service: SlotNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlotNumbersService],
    }).compile();

    service = module.get<SlotNumbersService>(SlotNumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

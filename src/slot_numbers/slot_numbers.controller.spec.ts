import { Test, TestingModule } from '@nestjs/testing';
import { SlotNumbersController } from './slot_numbers.controller';

describe('SlotNumbersController', () => {
  let controller: SlotNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlotNumbersController],
    }).compile();

    controller = module.get<SlotNumbersController>(SlotNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationNumberController } from './registration_number.controller';

describe('RegistrationNumberController', () => {
  let controller: RegistrationNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationNumberController],
    }).compile();

    controller = module.get<RegistrationNumberController>(RegistrationNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

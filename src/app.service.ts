import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Parking API! Check our Postman collection to get started https://www.postman.com/miracle-boi/workspace/finmo-challenge/request/16401766-40c944a7-89b0-4adb-a63d-c29b2d78c6c0';
  }
}

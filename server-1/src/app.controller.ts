import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    console.log('server-1 is run...');
    return 'this is server 1';
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    console.log('server-2 is run...')
    return 'this is server 2';
  }
}

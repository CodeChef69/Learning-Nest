import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HomeRouteResponseType } from 'types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HomeRouteResponseType {
    return this.appService.getHello();
  }
}

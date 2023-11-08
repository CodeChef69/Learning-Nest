import { Injectable } from '@nestjs/common';
import { HomeRouteResponseType } from 'types';

@Injectable()
export class AppService {
  getHello(): HomeRouteResponseType {
    return {
      server: 'online',
      message: 'welcome',
    };
  }
}

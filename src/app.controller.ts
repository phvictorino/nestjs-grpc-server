import { Controller, Get, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

interface User {
  email: string;
  password: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger('AppController');

  @GrpcMethod()
  login(user: User, metadata: any): User {
    this.logger.log(user);
    return user;
  }
}

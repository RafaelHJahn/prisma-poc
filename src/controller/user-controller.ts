import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user-service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body() userData: { email: string; name?: string },
  ): Promise<{ id: number }> {
    return this.userService.createUser(userData);
  }
}

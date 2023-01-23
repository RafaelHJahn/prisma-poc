import { Module } from '@nestjs/common';
import { PostController } from './controller/post-controller';
import { UserController } from './controller/user-controller';
import { PostService } from './service/post-service';
import { UserService } from './service/user-service';
import { PrismaService } from './service/prisma-service';

@Module({
  imports: [],
  controllers: [PostController, UserController],
  providers: [PostService, UserService, PrismaService],
})
export class AppModule {}

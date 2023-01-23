import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      // log: ['query', 'info', 'warn', 'error'],
      log: [{ emit: 'event', level: 'query' }, 'info', 'warn', 'error'],
    });

    this.$on<any>('query', (event: Prisma.QueryEvent) => {
      console.log('Query: ' + event.query);
      console.log('Params: ' + event.params);
      console.log('Duration: ' + event.duration + 'ms');
    });
  }

  async onModuleInit(): Promise<any> {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async (event) => {
      console.log(event.name);

      await app.close();
    });
  }
}

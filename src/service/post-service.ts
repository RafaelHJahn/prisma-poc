import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma-service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({
      data,
    });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prismaService.post.delete({
      where,
    });
  }

  async getPost(where: Prisma.PostWhereUniqueInput): Promise<Post | null> {
    return this.prismaService.post.findUnique({
      where,
    });
  }

  async getPosts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prismaService.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updatePost(params: {
    data: Prisma.PostUpdateInput;
    where: Prisma.PostWhereUniqueInput;
  }): Promise<Post> {
    const { data, where } = params;

    return this.prismaService.post.update({
      data,
      where,
    });
  }
}

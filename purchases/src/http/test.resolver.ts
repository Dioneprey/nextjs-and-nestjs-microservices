import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from './authorization/authorization.guard'
import { PrismaService } from 'src/database/prisma/prisma.service'
import { Query, Resolver } from '@nestjs/graphql'

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  async hello() {
    return 'oi'
  }
}

import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma/prisma.service'

interface CreateCustomParams {
  authUserId: string
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustomerByAuthUserId(id: string) {
    return this.prisma.customer.findUnique({
      where: {
        authUserId: id,
      },
    })
  }

  async createCustomer({ authUserId }: CreateCustomParams) {
    return await this.prisma.customer.create({
      data: {
        authUserId,
      },
    })
  }
}

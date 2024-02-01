import {
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql'
import { Customer } from '../models/customer'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard'
import { AuthUser, CurrentUser } from 'src/http/authorization/current-user'
import { CustomersService } from 'src/services/customers.service'
import { PurchasesService } from 'src/services/purchases.service'

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customersService: CustomersService,
    private purchasesService: PurchasesService,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => Customer)
  me(@CurrentUser() user: AuthUser) {
    return this.customersService.getCustomerByAuthUserId(user.sub)
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchasesService.listAllFromCustomer(customer.id)
  }

  @ResolveReference()
  resolveReference(reference: { authUserId: string }) {
    return this.customersService.getCustomerByAuthUserId(reference.authUserId)
  }
}

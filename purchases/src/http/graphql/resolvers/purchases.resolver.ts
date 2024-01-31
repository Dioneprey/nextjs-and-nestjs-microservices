import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Purchase } from '../models/purchase'
import { PurchasesService } from 'src/services/purchases.service'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard'
import { Product } from '../models/product'
import { ProductsService } from 'src/services/products.service'

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesService,
    private productsService: ProductsService,
  ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchasesService.listAllPurchases()
  }

  @ResolveField(() => Product)
  product(@Parent() purchase: Purchase) {
    return this.productsService.getProductById(purchase.productId)
  }
}
import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common'
import { ApolloDriver } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import path from 'node:path'

import { DatabaseModule } from 'src/database/database.module'
import { ProductsResolver } from './graphql/resolvers/products.resolver'
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver'
import { CustomersResolver } from './graphql/resolvers/customers.resolver'
import { ProductsService } from 'src/services/products.service'
import { PurchasesService } from 'src/services/purchases.service'
import { CustomersService } from 'src/services/customers.service'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    ProductsResolver,
    PurchasesResolver,
    CustomersResolver,

    // Services
    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}

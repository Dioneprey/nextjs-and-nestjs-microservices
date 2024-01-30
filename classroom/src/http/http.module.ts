import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common'
import { ApolloDriver } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import path from 'node:path'

import { TestResolver } from './test.resolver'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [TestResolver],
})
export class HttpModule {}

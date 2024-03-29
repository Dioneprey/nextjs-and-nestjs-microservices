import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common'
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import path from 'node:path'

import { DatabaseModule } from 'src/database/database.module'
import { CoursesResolver } from './graphql/resolvers/courses.resolver'
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver'
import { StudentsResolver } from './graphql/resolvers/students.resolver'
import { CoursesService } from 'src/services/courses.service'
import { EnrollmentsService } from 'src/services/enrollments.service'
import { StudentsService } from 'src/services/students.service'
import { AuthModule } from './authorization/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        path: path.resolve(process.cwd(), 'src/schema.gql'),
        federation: 2,
      },
    }),
  ],
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,

    // Services
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}

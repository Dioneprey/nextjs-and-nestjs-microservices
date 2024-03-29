import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Student } from '../models/student'
import { UseGuards } from '@nestjs/common'
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard'
import { StudentsService } from 'src/services/students.service'
import { EnrollmentsService } from 'src/services/enrollments.service'

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents()
  }

  @ResolveField()
  enrollments(@Parent() student: Student) {
    return this.enrollmentsService.listEnrollmentsByStudent(student.id)
  }
}

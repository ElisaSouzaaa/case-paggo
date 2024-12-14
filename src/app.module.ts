import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { DocumentsModule } from './documents/documents.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, DocumentsModule, UsersModule],
})
export class AppModule {}
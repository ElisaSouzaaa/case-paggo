import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Registra o PrismaService como um provedor.
  exports: [PrismaService],   // Permite que outros módulos usem o PrismaService.
})
export class PrismaModule {}

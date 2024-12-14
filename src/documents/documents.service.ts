import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Document, Prisma } from '@prisma/client';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  async createDocument(data: {title: string, content: string, userId: number}): Promise<Document>{
    return this.prisma.document.create({
      data: {
        title: data.title,
        content: data.content,
        user: {
          connect: {
            id: data.userId
          }
        }
      }
    })
  }

  async getDocumentById(id: number): Promise<Document | null> {
    return this.prisma.document.findUnique({ where: { id } });
  }

  async listDocuments(): Promise<Document[]> {
    return this.prisma.document.findMany();
  }
}
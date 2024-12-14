import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { Document } from '@prisma/client';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  async create(@Body() data: { title: string; content: string; userId: number }): Promise<Document> {
    return this.documentsService.createDocument(data);
  }

  @Get(':id')
  async getDocument(@Param('id') id: string): Promise<Document | null> {
    return this.documentsService.getDocumentById(Number(id));
  }

  @Get()
  async listDocuments(): Promise<Document[]> {
    return this.documentsService.listDocuments();
  }
}
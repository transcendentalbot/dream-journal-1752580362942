// /lib/prisma.ts
import { PrismaClient, Dream } from '@prisma/client';

const prisma = new PrismaClient();

export const getDreams = async (): Promise<Dream[]> => {
  return await prisma.dream.findMany();
};

export const getDream = async (id: string): Promise<Dream | null> => {
  return await prisma.dream.findUnique({ where: { id } });
};

export const createDream = async (
  title: string,
  content: string
): Promise<Dream> => {
  return await prisma.dream.create({
    data: {
      title,
      content,
    },
  });
};
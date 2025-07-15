// /app/dreams/page.tsx
import React from 'react';
import { getDreams } from '@/lib/prisma';
import DreamList from '@/components/DreamList';

export default async function DreamsPage() {
  const dreams = await getDreams();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Dream Journal</h1>
      <DreamList dreams={dreams} />
    </div>
  );
}
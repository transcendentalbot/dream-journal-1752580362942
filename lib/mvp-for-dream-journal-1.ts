// /app/dreams/[id]/page.tsx
import React from 'react';
import { getDream } from '@/lib/prisma';
import DreamDetails from '@/components/DreamDetails';

export default async function DreamPage({ params }: { params: { id: string } }) {
  const dream = await getDream(params.id);

  if (!dream) {
    return <div>Dream not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <DreamDetails dream={dream} />
    </div>
  );
}
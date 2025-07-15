// /app/dreams/new/page.tsx
import React from 'react';
import DreamForm from '@/components/DreamForm';

export default function NewDreamPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">New Dream Entry</h1>
      <DreamForm />
    </div>
  );
}
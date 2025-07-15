// /components/DreamDetails.tsx
import React from 'react';
import { Dream } from '@prisma/client';

interface DreamDetailsProps {
  dream: Dream;
}

const DreamDetails: React.FC<DreamDetailsProps> = ({ dream }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{dream.title}</h1>
      <p className="mb-4">{dream.content}</p>
      <p>Created: {dream.createdAt.toDateString()}</p>
    </div>
  );
};

export default DreamDetails;
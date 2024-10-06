import { Suspense } from 'react';
import request from '@/app/utils/request';
import CVForm from '@/app/components/CVForm';

export async function CVFormWrapper() {
  const { data } = await request.get('/api/strapi/shared/send-cv');

  const sectionFormData = data.data.attributes;

  return (
    <Suspense fallback={null}>
      <CVForm sectionFormData={sectionFormData} />
    </Suspense>
  );
}

import { Suspense } from 'react';
import fetchWrapper from '@/app/utils/fetchWrapper';
import CVForm from '@/app/components/CVForm';

export async function CVFormWrapper() {
  const data = await fetchWrapper('/api/section-cv-form?populate=deep');

  const sectionFormData = data.data.attributes;

  return (
    <Suspense fallback={null}>
      <CVForm sectionFormData={sectionFormData} />
    </Suspense>
  );
}

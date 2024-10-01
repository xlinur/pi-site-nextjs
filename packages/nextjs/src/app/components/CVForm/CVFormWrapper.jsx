import { Suspense } from 'react';
import sectionStartConversation from '@/app/api/strapi/sectionStartConversation/route';
import CVForm from '@/app/components/CVForm';

export async function CVFormWrapper() {
  const sectionFormData = await sectionStartConversation();

  return (
    <Suspense fallback={null}>
      <CVForm sectionFormData={sectionFormData} />
    </Suspense>
  );
}

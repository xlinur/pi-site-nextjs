import { Suspense } from 'react';
import ContactForm from '@/app/components/ContactForm';
import fetchWrapper from '@/app/utils/fetchWrapper';

export async function ContactFormWrapper() {
  const [sectionFormData, settingsData] = await Promise.all([
    fetchWrapper('/api/section-start-conversation-form?populate=deep'),
    fetchWrapper('/api/global?populate=deep'),
  ]);

  return (
    <Suspense fallback={null}>
      <ContactForm
        sectionFormData={sectionFormData.data.attributes}
        globalSettings={settingsData.data.attributes}
      />
    </Suspense>
  );
}

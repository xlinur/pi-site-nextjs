import { Suspense } from 'react';
import ContactForm from '@/app/components/ContactForm';
import request from '@/app/utils/request';

export async function ContactFormWrapper() {
  const { data: sectionFormData } = await request.get(
    '/api/strapi/shared/start-conversation',
  );
  const { data: settingsData } = await request.get(
    '/api/strapi/global/settings',
  );

  return (
    <Suspense fallback={null}>
      <ContactForm
        sectionFormData={sectionFormData.data.attributes}
        globalSettings={settingsData.data.attributes}
      />
    </Suspense>
  );
}

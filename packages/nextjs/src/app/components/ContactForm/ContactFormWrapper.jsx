import { Suspense } from 'react';
import sectionStartConversation from '@/app/api/strapi/sectionStartConversation/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import ContactForm from '@/app/components/ContactForm';

export async function ContactFormWrapper() {
  const sectionFormData = await sectionStartConversation();
  const globalSettings = await getGlobalSettings();

  return (
    <Suspense fallback={null}>
      <ContactForm
        sectionFormData={sectionFormData}
        globalSettings={globalSettings}
      />
    </Suspense>
  );
}

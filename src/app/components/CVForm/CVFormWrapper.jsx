import { Suspense } from 'react';
import fetchWrapper from '@/app/utils/fetchWrapper';
import CVForm from '@/app/components/CVForm';
import SuccessModal from '@/app/components/SuccessModal';

import { SUCCESS_MODAL_ID } from './constants';

export async function CVFormWrapper() {
  const data = await fetchWrapper('/api/section-cv-form?populate=deep');

  const sectionFormData = data.data.attributes;

  const { successMessage } = sectionFormData;

  return (
    <Suspense fallback={null}>
      <CVForm sectionFormData={sectionFormData} />
      <SuccessModal
        id={SUCCESS_MODAL_ID}
        title={successMessage.title}
        message={successMessage.message}
      />
    </Suspense>
  );
}

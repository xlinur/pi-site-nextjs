import { Suspense } from 'react';
import SectionIndividualReport from '@/app/components/Sections/SectionIndividualReport';
import fetchWrapper from '@/app/utils/fetchWrapper';

export async function SectionIndividualReportWrapper() {
  const data = await fetchWrapper(
    '/api/section-order-your-report?populate=deep',
  );

  return (
    <Suspense fallback={null}>
      <SectionIndividualReport
        sectionIndividualReportData={data.data.attributes}
      />
    </Suspense>
  );
}

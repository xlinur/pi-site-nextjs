import { Suspense } from 'react';
import SectionIndividualReport from '@/app/components/Sections/SectionIndividualReport';
import request from '@/app/utils/request';

export async function SectionIndividualReportWrapper() {
  const { data } = await request.get('/api/strapi/shared/individual-report');

  return (
    <Suspense fallback={null}>
      <SectionIndividualReport
        sectionIndividualReportData={data.data.attributes}
      />
    </Suspense>
  );
}

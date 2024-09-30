import SectionIndividualReport from '@/app/components/Sections/SectionIndividualReport';
import sectionIndividualReport from '@/app/api/strapi/sectionIndividualReport/route';
import { Suspense } from 'react';

export async function SectionIndividualReportWrapper() {
  const sectionIndividualReportData = await sectionIndividualReport();

  return (
    <Suspense fallback={null}>
      <SectionIndividualReport
        sectionIndividualReportData={sectionIndividualReportData}
      />
    </Suspense>
  );
}

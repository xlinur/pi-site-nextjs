import { request } from '@/utils/request';

const query = {
  populate: {
    WhyPersonalInvest: {
      fields: ['title'],
    },
    WhyPersonalInvestItems: {
      populate: {
        fields: ['title', 'subTitle'],
      },
    },
  },
};

interface Response {
  WhyPersonalInvest: {
    title: string;
  };
  WhyPersonalInvestItems: {
    title: string;
    description: string;
  }[];
}

const route = async () => await request<Response>('/api/test-page', { query });

export default route;

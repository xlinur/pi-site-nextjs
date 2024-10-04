import { getTimezoneOffset } from '@/utils/getTimezoneOffset';

export const createWorkingHours = (time) => `${time} ${getTimezoneOffset()}`;

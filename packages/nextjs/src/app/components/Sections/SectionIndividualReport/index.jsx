'use client';

import { useForm } from '@mantine/form';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import whatsappSVG from '@/app/assets/icons/social/whatsapp.svg';
import chatSVG from '@/app/assets/icons/chat-white.svg';
import phoneSVG from '@/app/assets/icons/phone.svg';
import clockSvg from '@/app/assets/icons/clock.svg';

import InputField from '@/app/components/Form/Input';
import SelectField from '@/app/components/Form/Select';
import TextareaField from '@/app/components/Form/Textarea';
import Checkbox from '@/app/components/Form/Checkbox';
import Button from '@/app/components/Button';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import styles from './styles.module.scss';
import Image from 'next/image';

const optionsServices = [
  { value: 'IT recruitment', label: 'IT recruitment' },
  { value: 'Executive Search', label: 'Executive Search' },
  { value: 'Business Consulting', label: 'Business Consulting' },
  {
    value: 'Market Research and Analytics',
    label: 'Market Research and Analytics',
  },
  { value: 'Startup Development', label: 'Startup Development' },
];

const optionsContactPreferences = [
  { value: 'whatsapp', label: 'Whatsapp' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'E-mail', label: 'E-mail' },
  { value: 'phone', label: 'Phone' },
];

const mok = {
  title: 'Start a conversation',
  subTitle: 'Leave a request and we will contact you within an hour.',
  info: 'Or contact us by phone:',

  nameLabel: 'Name',
  emailLabel: 'E-mail or nickname',
  companyLabel: 'Company',
  serviceSelect: {
    label: 'Select services',
    options: optionsServices,
  },
  contactSelect: {
    label: 'Contact preferences',
    options: optionsContactPreferences,
  },
  descriptionLabel: 'Comments (optional)',
  legalCheckboxText:
    'Yes, I have read and agree to the Data Privacy and Legal Notice.',

  submitBtn: 'Send',

  checkBoxesList: [
    {
      label: 'Compare the salary level in the company with the market level',
    },
    {
      label: 'Open a company/legal entity in new locations',
    },
    {
      label: 'Explore new possible locations for doing business',
    },
    {
      label: 'Other',
    },
  ],
};

const ExtraContactContent = () => (
  <>
    <div className="icon">
      <Image src={chatSVG} alt="Icon" width={174} height={174} />
    </div>
    <ul>
      <li>
        <p>Or contact us by phone:</p>
      </li>
      <li>
        <Image src={phoneSVG} alt="Icon" width={38} height={38} />
        <h5>
          <a href="#">+ 371-56-548-29</a>
        </h5>
      </li>
      <li>
        <Image src={whatsappSVG} alt="Icon" width={38} height={38} />
        <h5>
          <a href="#">+ 371-xx-xxx-xx</a>
        </h5>
      </li>

      <li>
        <a href="/">
          <Image src={clockSvg} alt="Clock icon" width={24} height={24} />
          <div className={styles.workHours}>9:00 - 20:00 UTS +2</div>
        </a>
      </li>
    </ul>
  </>
);

export default function SectionIndividualReport() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      company: '',
      email: '',
      services: '',
      contactPreference: '',
      comment: '',
    },
  });

  const isNameEmpty = !form.getValues().name;
  const isCompanyEmpty = !form.getValues().company;
  const isEmailEmpty = !form.getValues().email;
  const isCommentEmpty = !form.getValues().comment;

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleServiceSelectCallback = (option) => {
    form.setFieldValue('services', option.value);
  };

  const handleContactPreferencesSelectCallback = (option) => {
    form.setFieldValue('contactPreference', option.value);
  };

  const handleSubmitCallback = async (values) => {
    if (!executeRecaptcha) {
      console.log('Not available to proceed recaptcha');
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

    const responseResult = await fetch('/api/recaptcha', {
      method: 'post',
      body: JSON.stringify({
        gRecaptchaToken: gRecaptchaToken,
      }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    const responseResultJson = await responseResult.json();

    if (responseResultJson.success) {
      console.log('Success to verify via recaptcha');

      const responseContactFormResult = await fetch('api/email', {
        method: 'post',
        body: JSON.stringify(values),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      console.log(responseContactFormResult);
    } else {
      console.log('Failed to verify via recaptcha');
    }
  };

  return (
    <section className={styles.wrapper}>
      <header>
        <h4>Order your individual analytical report</h4>
        <p>Leave a request and we will contact you within an hour.</p>
      </header>

      <div className={styles.formWrapper}>
        <form
          className={styles.from}
          onSubmit={form.onSubmit(async (values) => {
            await handleSubmitCallback(values);
          })}
        >
          <div className={styles.firstBlock}>
            <p>Please indicate the purpose of the research</p>

            <div className={styles.cbWrapper}>
              {mok.checkBoxesList.map((item, idx) => (
                <Checkbox key={idx} required label={item.label} />
              ))}
            </div>
          </div>

          <div className={styles.secondBlock}>
            <InputField
              type="text"
              label={mok.nameLabel}
              isEmpty={isNameEmpty}
              key={form.key('name')}
              {...form.getInputProps('name')}
            />
            <InputField
              type="text"
              label={mok.companyLabel}
              isEmpty={isCompanyEmpty}
              key={form.key('company')}
              {...form.getInputProps('company')}
            />
            <SelectField
              options={mok.serviceSelect.options}
              onSelect={handleServiceSelectCallback}
              label={mok.serviceSelect.label}
            />
            <SelectField
              options={mok.contactSelect.options}
              onSelect={handleContactPreferencesSelectCallback}
              label={mok.contactSelect.label}
            />
            <InputField
              type="text"
              label={mok.emailLabel}
              isEmpty={isEmailEmpty}
              key={form.key('email')}
              {...form.getInputProps('email')}
            />

            <TextareaField
              label={mok.descriptionLabel}
              isEmpty={isCommentEmpty}
              key={form.key('comment')}
              {...form.getInputProps('comment')}
            />

            <Checkbox required label={mok.legalCheckboxText} />

            <Button content="center" size="lg" type="submit">
              {mok.submitBtn}
            </Button>
          </div>
        </form>

        <div className={styles.social}>
          <ExtraContactContent />
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { useForm } from '@mantine/form';

import InputField from '@/app/components/Form/Input';
import SelectField from '@/app/components/Form/Select';
import TextareaField from '@/app/components/Form/Textarea';
import Checkbox from '@/app/components/Form/Checkbox';
import Button from '@/app/components/Button';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import whatsappSVG from '@/app/assets/icons/social/whatsapp.svg';
import chatSVG from '@/app/assets/icons/chat-white.svg';
import phoneSVG from '@/app/assets/icons/phone.svg';
import clockSvg from '@/app/assets/icons/clock.svg';

import styles from './styles.module.scss';

export const optionsServices = [
  { value: 'IT recruitment', label: 'IT recruitment' },
  { value: 'Executive Search', label: 'Executive Search' },
  { value: 'Business Consulting', label: 'Business Consulting' },
  {
    value: 'Market Research and Analytics',
    label: 'Market Research and Analytics',
  },
  { value: 'Startup Development', label: 'Startup Development' },
];
export const optionsContactPreferences = [
  { value: 'whatsapp', label: 'Whatsapp' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'E-mail', label: 'E-mail' },
  { value: 'phone', label: 'Phone' },
];

export const ContactForm = () => {
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
  };

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
  // const isServiceEmpty = !form.getValues().services;
  // const isContactPreferenceEmpty = !form.getValues().contactPreference;
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
    <div className={styles.formWrapper}>
      <section className={styles.contacts}>
        <header>
          <h3>{mok.title}</h3>
          <p>{mok.subTitle}</p>
        </header>

        <div className="icon">
          <Image src={chatSVG} alt="Icon" width={226} height={226} />
        </div>

        <ul>
          <li>
            <p>Or contact us by phone:</p>
          </li>
          <li>
            <Image src={phoneSVG} alt="Icon" width={38} height={38} />
            <h4>
              <a href="#">+ 371-56-548-29</a>
            </h4>
          </li>
          <li>
            <Image src={whatsappSVG} alt="Icon" width={38} height={38} />
            <h4>
              <a href="#">+ 371-xx-xxx-xx</a>
            </h4>
          </li>

          <li>
            <a href="/">
              <Image src={clockSvg} alt="Clock icon" width={24} height={24} />
              <div className={styles.workHours}>9:00 - 20:00 UTS +2</div>
            </a>
          </li>
        </ul>
      </section>

      <form
        className={styles.form}
        onSubmit={form.onSubmit(async (values) => {
          await handleSubmitCallback(values);
        })}
      >
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
      </form>
    </div>
  );
};

export default ContactForm;

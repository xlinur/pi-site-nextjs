'use client';

import Image from 'next/image';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from '@mantine/form';

import InputField from '@/app/components/Form/Input';
import SelectField from '@/app/components/Form/Select';
import TextareaField from '@/app/components/Form/Textarea';
import Checkbox from '@/app/components/Form/Checkbox';
import Button from '@/app/components/Button';
import whatsappSVG from '@/app/assets/icons/social/whatsapp.svg';
import chatSVG from '@/app/assets/icons/chat-white.svg';
import phoneSVG from '@/app/assets/icons/phone.svg';
import clockSvg from '@/app/assets/icons/clock.svg';

import { ANCHORS } from '@/app/core/constants/anchor';
import { sendEmail } from '@/utils/sendEmail';
import { createWorkingHours } from '@/app/utils/createWorkingHours';

import styles from './styles.module.scss';
import clsx from 'clsx';

const emailFields = {
  name: 'name',
  company: 'company',
  service: 'service',
  contactPreference: 'contactPreference',
  contact: 'contact',
  comment: 'comment',
};

/**
 * Adopt input services options to select component
 * @param inputServicesOptions {{id: any, label: string}[]}
 * @return {{key: number|string, label: string}[]}
 */
export function adoptOptions(inputServicesOptions) {
  return inputServicesOptions.map(({ id, label }) => {
    return { value: id, label: label };
  });
}

export const Content = ({ isFormModal, globalSettings, sectionFormData }) => {
  const { contacts, workingHours } = globalSettings;
  const { phone } = contacts;
  const {
    title,
    subtitle,
    info,
    submitBtn,
    inputName,
    selectServices,
    selectContact,
    inputContact,
    textareaComment,
    legals,
    inputCompany,
  } = sectionFormData;

  const time = createWorkingHours(workingHours);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: Object.values(emailFields).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {},
    ),
  });

  const createFormInput = (label, key) => (
    <InputField
      type="text"
      label={label}
      isEmpty={!form.getValues()[key]}
      key={form.key(key)}
      {...form.getInputProps(key)}
    />
  );

  const onSelectChange = (key) => (option) => {
    form.setFieldValue(key, option.label);
  };

  const createFormSelect = (label, key, options) => (
    <SelectField
      label={label}
      options={options}
      onSelect={onSelectChange(key)}
    />
  );

  const createTextarea = (label, key) => (
    <TextareaField
      label={label}
      isEmpty={!form.getValues()[key]}
      key={form.key(key)}
      {...form.getInputProps(key)}
    />
  );

  const createCheckbox = (label, idx) => (
    <Checkbox required label={label} key={idx} />
  );

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitCallback = async (values) => {
    if (!executeRecaptcha) {
      console.log('Not available to proceed recaptcha');
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

    await sendEmail({
      gRecaptchaToken,
      emailTemplate: 'ContactSubmission',
      payload: values,
    });
  };

  return (
    <div
      className={clsx(
        isFormModal && styles.modalFormWrapper,
        styles.formWrapper,
      )}
      id={ANCHORS.CONTACT_FORM.ID}
    >
      <section className={styles.contacts}>
        <header>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </header>

        <div className={styles.iconChat}>
          <Image src={chatSVG} alt="Icon" width={226} height={226} />
        </div>

        <ul>
          <li>
            <p>{info}</p>
          </li>
          <li>
            <Image src={phoneSVG} alt="Icon" width={38} height={38} />
            <h3>
              <a href={`tel:${phone}`}>{phone}</a>
            </h3>
          </li>
          <li>
            <Image src={whatsappSVG} alt="Icon" width={38} height={38} />
            <h3>{phone}</h3>
          </li>

          <li>
            <a href="/">
              <Image src={clockSvg} alt="Clock icon" width={24} height={24} />
              <div className={styles.workHours}>{time}</div>
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
        {createFormInput(inputName.label, emailFields.name)}
        {createFormInput(inputCompany.label, emailFields.company)}
        {createFormSelect(
          selectServices.label,
          emailFields.service,
          adoptOptions(selectServices.options),
        )}
        {createFormSelect(
          selectContact.label,
          emailFields.contactPreference,
          adoptOptions(selectContact.options),
        )}
        {createFormInput(inputContact.label, emailFields.contact)}
        {createTextarea(textareaComment.label, emailFields.comment)}

        {legals.map((item, idx) => createCheckbox(item.label, idx))}

        <Button content="center" size="lg" type="submit">
          {submitBtn}
        </Button>
      </form>
    </div>
  );
};

export default Content;

'use client';

import { useForm } from '@mantine/form';
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
import { sendEmail } from '../../../../utils/sendEmail';

const emailFields = {
  name: 'name',
  company: 'company',
  service: 'service',
  contact: 'contact',
  comment: 'comment',
  purposeOfResearch: 'purposeOfResearch',
  other: 'other',
  otherComment: 'otherComment',
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

const ExtraContactContent = ({ text }) => (
  <>
    <div className="icon">
      <Image src={chatSVG} alt="Icon" width={174} height={174} />
    </div>
    <ul>
      <li>
        <p>{text}</p>
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

export default function SectionIndividualReport({
  sectionIndividualReportData,
}) {
  const {
    title,
    subTitle,
    info,
    contactsTitle,
    submitBtn,
    inputName,
    inputCompany,
    selectServices,
    inputContact,
    legalCheckboxes,
    purposeOfResearch,
    otherPurpose,
    textareaComment,
  } = sectionIndividualReportData;

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      company: '',
      service: '',
      contact: '',
      comment: '',
      purposeOfResearch: purposeOfResearch.map(({ title }) => {
        return { checked: false, label: title };
      }),
      other: {
        checked: false,
        label: otherPurpose.label,
      },
      otherComment: '',
      legalCheckboxes: legalCheckboxes.map(({ label }) => {
        return { checked: false, label: label };
      }),
    },
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const createFormInput = (label, key) => (
    <InputField
      type="text"
      label={label}
      isEmpty={!form.getValues()[key]}
      key={form.key(key)}
      required={true}
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

  const handleSubmitCallback = async (values) => {
    if (!executeRecaptcha) {
      console.log('Not available to proceed recaptcha');
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

    await sendEmail({
      gRecaptchaToken,
      emailTemplate: 'ReportSubmission',
      payload: values,
    });
  };

  return (
    <section className={styles.wrapper}>
      <header>
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </header>

      <div className={styles.formWrapper}>
        <form
          className={styles.from}
          onSubmit={form.onSubmit(async (values) => {
            await handleSubmitCallback(values);
          })}
        >
          <div className={styles.firstBlock}>
            <p>{info}</p>

            <div className={styles.cbWrapper}>
              {purposeOfResearch.map(({ title }, index) => (
                <Checkbox
                  required
                  label={title}
                  key={form.key(`purposeOfResearch.${index}.checked`)}
                  {...form.getInputProps(`purposeOfResearch.${index}.checked`)}
                />
              ))}

              <Checkbox
                label={otherPurpose.label}
                key={form.key('other.checked')}
                {...form.getInputProps('other.checked')}
              />
              {createTextarea(otherPurpose.label, 'otherComment')}
            </div>
          </div>

          <div className={styles.secondBlock}>
            {createFormInput(inputName.label, emailFields.name)}
            {createFormInput(inputCompany.label, emailFields.company)}
            {createFormSelect(
              selectServices.label,
              emailFields.service,
              adoptOptions(selectServices.options),
            )}
            {createFormInput(inputContact.label, emailFields.contact)}
            {createTextarea(textareaComment.label, emailFields.comment)}

            {legalCheckboxes.map(({ label }, index) => {
              return (
                <Checkbox
                  required
                  label={label}
                  key={form.key(`legalCheckboxes.${index}.checked`)}
                  {...form.getInputProps(`legalCheckboxes.${index}.checked`)}
                />
              );
            })}

            <Button content="center" size="lg" type="submit">
              {submitBtn}
            </Button>
          </div>
        </form>

        <div className={styles.social}>
          <ExtraContactContent text={contactsTitle} />
        </div>
      </div>
    </section>
  );
}

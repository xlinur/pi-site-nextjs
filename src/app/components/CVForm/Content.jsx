'use client';
import crossSvg from '@/app/assets/icons/cross.svg';
import { useRef, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from '@mantine/form';
import { sendEmail } from '@/utils/sendEmail';
import { openModalById } from '@/app/components/Modal/utils';
import InputField from '@/app/components/Form/Input';
import Checkbox from '@/app/components/Form/Checkbox';
import Button from '@/app/components/Button';
import styles from './styles.module.scss';

import { SUCCESS_MODAL_ID } from './constants';
import Image from 'next/image';

const emailFields = {
  name: 'name',
  position: 'position',
  email: 'email',
  skills: 'skills',
};

function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export const Content = ({ sectionFormData }) => {
  const {
    title,
    subtitle,
    formTitle,
    inputName,
    inputPosition,
    inputEmail,
    inputSkills,
    uploadBtn,
    submitBtn,
    legals,
    successMessage,
  } = sectionFormData;

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: Object.values(emailFields).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {},
    ),
  });

  // State to handle file upload
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const createFormInput = (label, key) => (
    <InputField
      type="text"
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

    const file = values?.file ?? null;
    let attachment = {};

    if (file) {
      const { name, type } = file;

      attachment.filename = name;
      attachment.type = type;
      attachment.content = null;

      try {
        attachment.content = await convertFileToBase64(file);
      } catch (_) {
        console.log(_);
        // TODO: proccess error
      }
    }

    await sendEmail({
      gRecaptchaToken,
      emailTemplate: 'CVSubmission',
      payload: { ...values, attachments: [attachment] }, // Send uploaded file
    });

    openModalById(SUCCESS_MODAL_ID);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setUploadedFile(file);

      form.setFieldValue('file', file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    fileInputRef.current.value = ''; // Clear file input
  };

  return (
    <section className={styles.formWrapper}>
      <header>
        <span>CV</span>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </header>

      <form
        className={styles.form}
        onSubmit={form.onSubmit(async (values) => {
          await handleSubmitCallback(values);
        })}
      >
        <h5>{formTitle}</h5>

        {createFormInput(inputName.label, emailFields.name)}

        {createFormInput(inputPosition.label, emailFields.position)}

        {createFormInput(inputEmail.label, emailFields.email)}

        {createFormInput(inputSkills.label, emailFields.skills)}

        <div className={styles.cvUploadBlock}>
          <div>
            <p>SV</p>

            <span className={styles.cvFileTypes}>
              (Only pdf, zip, doc, docx, txt, rtf, rar)
            </span>
          </div>

          {/* <div className={styles.cvUploadContent}></div> */}
          <Button
            theme="secondary"
            name={uploadBtn.name}
            className={styles.uploadBtn}
            onClick={() => fileInputRef.current.click()}
          />

          <input
            type="file"
            accept=".pdf,.zip,.doc,.docx,.txt,.rtf,.rar"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {uploadedFile && (
            <div className={styles.cvFileDisplay}>
              <span className={styles.cvFileName}>{uploadedFile.name}</span>

              <button
                type="button"
                className={styles.cvFileRemove}
                onClick={handleRemoveFile}
              >
                <Image
                  src={crossSvg}
                  alt="Button remove CV file"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          )}
        </div>

        {legals.map((item, idx) => createCheckbox(item.label, idx))}

        <Button
          content="center"
          size="lg"
          type="submit"
          name={submitBtn?.name}
        />
      </form>
    </section>
  );
};

export default Content;

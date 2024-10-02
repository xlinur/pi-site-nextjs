'use client';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from '@mantine/form';
import InputField from '@/app/components/Form/Input';
import Checkbox from '@/app/components/Form/Checkbox';
import Button from '@/app/components/Button';
import { sendEmail } from '@/utils/sendEmail';
import styles from './styles.module.scss';
import { useRef, useState } from 'react';

const emailFields = {
  name: 'name',
  position: 'position',
  email: 'email',
  skills: 'skills',
};

const mok = {
  title: 'Get your dream job!',
  subtile: 'Send your resume and we will find a suitable vacancy for you',
  formTitle: 'Send CV',
  uploadBtn: {
    name: 'Upload',
  },
};

function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export const Content = ({ sectionFormData }) => {
  const { submitBtn, legals } = sectionFormData;

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
        <h4>{mok.title}</h4>
        <h5>{mok.subtile}</h5>
      </header>

      <form
        className={styles.form}
        onSubmit={form.onSubmit(async (values) => {
          await handleSubmitCallback(values);
        })}
      >
        <h5>{mok.formTitle}</h5>

        {createFormInput(emailFields.name, emailFields.name)}

        {createFormInput(emailFields.position, emailFields.position)}

        {createFormInput(emailFields.email, emailFields.email)}

        {createFormInput(emailFields.skills, emailFields.skills)}

        {legals.map((item, idx) => createCheckbox(item.label, idx))}

        <div className={styles.cvUploadBlock}>
          <p>CV</p>

          <span className={styles.cvFileTypes}>
            (Only pdf, zip, doc, docx, txt, rtf, rar)
          </span>

          <div className={styles.cvUploadContent}>
            <Button
              theme="secondary"
              name={mok.uploadBtn.name}
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
                  X
                </button>
              </div>
            )}
          </div>
        </div>

        <Button content="center" size="lg" type="submit">
          {submitBtn}
        </Button>
      </form>
    </section>
  );
};

export default Content;

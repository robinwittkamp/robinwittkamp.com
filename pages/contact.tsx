import { LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Buttons/Button';
import FieldMessage from '@/components/Form/FieldMessage';
import FormMessage from '@/components/Form/FormMessage';
import Head from '@/components/Head';
import PageLayout from '@/components/Layouts/PageLayout';
import Section from '@/components/Sections/Section';
import SocialLinks from '@/components/Socials/SocialLinks';
import Heading from '@/components/Text/Heading';
import localDe from '@/locales/de/contact';
import localEn from '@/locales/en/contact';
import CircleNotchIcon from '@/public/icons/fa-solid/circle-notch-solid.svg';
import PaperPlaneIcon from '@/public/icons/fa-solid/paper-plane-solid.svg';
import type { Mail } from '@/types/mail';

/**
 * Dynamic imports
 */
const loadFramerMotionFeatures = () =>
  import('@/lib/framer-motion/framerMotionFeatures').then((res) => res.default);

/**
 * Types
 */
// type ApiResponse = {
//   status?: string;
//   error?: string;
// };

// function isError(object: unknown): object is Error {
//   return object instanceof Error;
// }

/**
 * Send form data to API endpoint
 */
const sendEmail = async (data: Mail) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // console.log('response on client before json():', response);

    if (response.status !== 200) {
      throw new Error('Failed to send email.');
    }

    // return (await response.json());
    return response;
  } catch (error) {
    // if (error instanceof Error) {
    //   console.error('Error message:', error.message);
    // }
    // console.error('Unkown:', error);
    return error;
  }
};

/**
 * Component
 */
const Contact = () => {
  const [isSendSuccess, setIsSendSuccess] = useState(false);
  const [isSendError, setIsSendError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Mail>();

  const onSubmit: SubmitHandler<Mail> = async (data) => {
    setIsSending(true);
    setIsSendSuccess(false);
    setIsSendError(false);

    const response = await sendEmail(data);

    // console.log('response on client:', response);

    // if (response instanceof Response) {
    //   const json = await response.json();
    //   console.log('json:', json);
    // }

    if (response instanceof Response && response.status === 200) {
      // if (response.status === 200) {
      setIsSendSuccess(true);
      setIsSending(false);
      reset();
    } else {
      setIsSendError(true);
      setIsSending(false);
    }

    // if (!response.ok) {
    //   throw new Error('Failed to send email');
    // }

    // try {
    //   const response = await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   return await response.json();

    //   if (response.status !== 200) {
    //     throw new Error('Something went wrong');
    //   }

    //   setIsSendSuccess(true);
    //   setIsSending(false);
    //   reset();
    // } catch (error) {
    //   console.log(error);
    //   setIsSendError(true);
    //   setIsSending(false);
    // }

    // fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setIsSendSuccess(true);
    //       setIsSending(false);
    //       reset();
    //     } else {
    //       setIsSendError(true);
    //       setIsSending(false);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} />
      <Section first maxScreenWidth="lg">
        <Heading variant="h1">{t.heading}</Heading>
        {/* Flex container */}
        <div className="mt-8 lg:mt-16 lg:flex">
          {/* Left container */}
          <div className="lg:flex-1">
            {/* <p className="text-lg">{t.paragraph}</p> */}
            <Heading variant="h5">{t.contactInformation.email}</Heading>
            <p className="mt-4 text-lg text-rusty-300 lg:mt-6 lg:text-xl">info@robinwittkamp.com</p>
            <Heading variant="h5" classes="mt-8">
              {t.contactInformation.social}
            </Heading>
            <div className="mt-4 lg:mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Right container */}
          <div className="lg:flex-1">
            <Heading variant="h5" classes="mt-12 lg:mt-0">
              {t.form.heading}
            </Heading>
            {/* Form */}
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)} method="POST">
              {/* Field: Name */}
              <div className="">
                {/* Label */}
                {/* <div className="">
                  <label htmlFor="name">{t.form.fields.name}</label>
                </div> */}
                {/* Input */}
                <input
                  id="name"
                  className={`block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 px-4 py-3 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
                    errors.name ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
                  }`}
                  type="text"
                  placeholder={t.form.fields.name}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  {...register('name', { required: t.form.messages.fieldRequired })}
                />
                {/* Error message */}
                <FieldMessage>{errors.name?.message}</FieldMessage>
              </div>

              {/* Field: Email */}
              <div className="mt-4">
                {/* Label */}
                {/* <div className="">
                  <label htmlFor="email">{t.form.fields.email}</label>
                </div> */}
                {/* Input */}
                <input
                  id="email"
                  className={`block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 px-4 py-3 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
                    errors.email ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
                  }`}
                  type="email"
                  placeholder={t.form.fields.email}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', { required: t.form.messages.fieldRequired })}
                />
                {/* Error message */}
                <FieldMessage>{errors.email?.message}</FieldMessage>
              </div>

              {/* Field: Message */}
              <div className="mt-4">
                {/* Label */}
                {/* <div className="">
                  <label htmlFor="message">{t.form.fields.message}</label>
                </div> */}
                {/* Input */}
                <textarea
                  id="message"
                  className={`block max-h-[32rem] min-h-[8rem] w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 px-4 py-3 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
                    errors.message ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
                  }`}
                  placeholder={t.form.fields.message}
                  rows={4}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  {...register('message', { required: t.form.messages.fieldRequired })}
                />
                {/* Error message */}
                <FieldMessage>{errors.message?.message}</FieldMessage>
              </div>

              {/* Field: Button */}
              <div className="mt-6">
                <Button type="submit" variant="secondary">
                  {isSending ? (
                    <>
                      <LazyMotion features={loadFramerMotionFeatures} strict>
                        <m.div
                          animate={{ rotate: 360 }}
                          transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
                        >
                          <CircleNotchIcon className="h-5" fill="currentColor" />
                        </m.div>
                      </LazyMotion>
                      <span className="ml-3">{t.form.fields.buttonSending}</span>
                    </>
                  ) : (
                    <>
                      <PaperPlaneIcon className="h-4" fill="currentColor" />
                      <span className="ml-3">{t.form.fields.buttonSubmit}</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Messages */}
              {isSendError && (
                <div className="mt-8">
                  <FormMessage variant="error">{t.form.messages.sendError}</FormMessage>
                </div>
              )}
              {isSendSuccess && (
                <div className="mt-8">
                  <FormMessage variant="success">{t.form.messages.sendSuccess}</FormMessage>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;

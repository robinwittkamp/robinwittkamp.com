import { LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Buttons/Button';
import FieldMessage from '@/components/Form/FieldMessage';
import FormMessage from '@/components/Form/FormMessage';
import localDe from '@/locales/de/contact';
import localEn from '@/locales/en/contact';
import CircleNotchIcon from '@/public/icons/fa-solid/circle-notch-solid.svg';
import EnvelopeIcon from '@/public/icons/fa-solid/envelope-solid.svg';
import PaperPlaneIcon from '@/public/icons/fa-solid/paper-plane-solid.svg';
import PenClipIcon from '@/public/icons/fa-solid/pen-clip-solid.svg';
import UserLargeIcon from '@/public/icons/fa-solid/user-large-solid.svg';
import type { Mail } from '@/types/mail';

/**
 * Dynamic imports
 */
const loadFramerMotionFeatures = () =>
  import('@/lib/framer-motion/framerMotionFeatures').then((res) => res.default);

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

    if (response.status !== 200) {
      throw new Error('Failed to send email.');
    }

    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Component
 */
const ContactForm = (): ReactElement => {
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

    if (response instanceof Response && response.status === 200) {
      setIsSendSuccess(true);
      setIsSending(false);
      reset();
    } else {
      setIsSendError(true);
      setIsSending(false);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)} method="POST">
      {/* Field: Name */}
      <div className="relative">
        {/* Label */}
        {/* <div className="">
          <label htmlFor="name">{t.form.fields.name}</label>
        </div> */}
        {/* Icon */}
        <UserLargeIcon
          className="absolute top-1/2 h-4 -translate-y-1/2 px-4 text-rusty-200"
          fill="currentColor"
        />
        {/* Input */}
        <input
          id="name"
          className={`block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 py-3 pl-12 pr-4 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
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
      <div className="relative mt-4">
        {/* Label */}
        {/* <div className="">
          <label htmlFor="email">{t.form.fields.email}</label>
        </div> */}
        {/* Icon */}
        <EnvelopeIcon
          className="absolute top-1/2 h-4 -translate-y-1/2 px-4 text-rusty-200"
          fill="currentColor"
        />
        {/* Input */}
        <input
          id="email"
          className={`block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 py-3 pl-12 pr-4 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
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
      <div className="relative mt-4">
        {/* Label */}
        {/* <div className="">
          <label htmlFor="message">{t.form.fields.message}</label>
        </div> */}
        {/* Icon */}
        <PenClipIcon
          className="absolute top-[calc(3.25rem/2)] h-4 -translate-y-1/2 px-4 text-rusty-200"
          fill="currentColor"
        />
        {/* Input */}
        <textarea
          id="message"
          className={`block max-h-[32rem] min-h-[8rem] w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 py-3 pl-12 pr-4 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
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
        <Button type="submit" variant="secondary" disabled={isSending}>
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
  );
};

export default ContactForm;

import { LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

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
  const [isNameFieldFocused, setNameFieldFocused] = useState(false);
  const [isEmailFieldFocused, setEmailFieldFocused] = useState(false);
  const [isMessageFieldFocused, setMessageFieldFocused] = useState(false);

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
    getFieldState,
    formState: { errors },
  } = useForm<Mail>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<Mail> = async (data) => {
    setIsSending(true);
    setIsSendSuccess(false);
    setIsSendError(false);

    const response = await sendEmail(data);

    if (response instanceof Response && response.status === 200) {
      setIsSendSuccess(true);
      setIsSending(false);
      reset();
      setMessageFieldFocused(false);
      setEmailFieldFocused(false);
      setNameFieldFocused(false);
    } else {
      setIsSendError(true);
      setIsSending(false);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)} method="POST">
      {/* Row (Name) */}
      <div>
        {/* Field */}
        <div className="relative">
          <label
            htmlFor="name"
            className={`absolute left-11 top-1/2 origin-[0%_50%] -translate-y-1/2 bg-rusty-800 px-1 text-lg text-rusty-300 transition-transform duration-200 ${
              isNameFieldFocused ? '-translate-y-10 scale-75' : ''
            }`}
          >
            {t.form.fields.name}
          </label>
          <UserLargeIcon
            className="absolute top-1/2 h-4 -translate-y-1/2 px-4 text-rusty-200"
            fill="currentColor"
          />
          <input
            id="name"
            className={`block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 py-3 pl-12 pr-4 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
              errors.name ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
            }`}
            type="text"
            aria-invalid={errors.name ? 'true' : 'false'}
            onFocus={() => setNameFieldFocused(true)}
            {...register('name', {
              required: t.form.messages.fieldRequired,
              onBlur: () => setNameFieldFocused(getFieldState('name').isDirty),
            })}
          />
        </div>
        {/* Error message */}
        <FieldMessage>{errors.name?.message}</FieldMessage>
      </div>

      {/* Row (Email) */}
      <div className="mt-4">
        {/* Field */}
        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-11 top-1/2 origin-[0%_50%] -translate-y-1/2 bg-rusty-800 px-1 text-lg text-rusty-300 transition-transform duration-200 ${
              isEmailFieldFocused ? '-translate-y-10 scale-75' : ''
            }`}
          >
            {t.form.fields.email}
          </label>
          <EnvelopeIcon
            className="absolute top-1/2 h-4 -translate-y-1/2 px-4 text-rusty-200"
            fill="currentColor"
          />
          <input
            id="email"
            className={`block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 py-3 pl-12 pr-4 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
              errors.email ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
            }`}
            type="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            onFocus={() => setEmailFieldFocused(true)}
            {...register('email', {
              required: t.form.messages.fieldRequired,
              onBlur: () => setEmailFieldFocused(getFieldState('email').isDirty),
            })}
          />
        </div>
        {/* Error message */}
        <FieldMessage>{errors.email?.message}</FieldMessage>
      </div>

      {/* Row (Message) */}
      <div className="mt-4">
        {/* Field */}
        <div className="relative">
          <label
            htmlFor="message"
            className={`absolute left-11 top-7 origin-[0%_50%] -translate-y-1/2 bg-rusty-800 px-1 text-lg text-rusty-300 transition-transform duration-200 ${
              isMessageFieldFocused ? '-translate-y-10 scale-75' : ''
            }`}
          >
            {t.form.fields.message}
          </label>
          <PenClipIcon
            className="absolute top-7 h-4 -translate-y-1/2 px-4 text-rusty-200"
            fill="currentColor"
          />
          <textarea
            id="message"
            className={`block max-h-[32rem] min-h-[8rem] w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 py-3 pl-12 pr-4 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:outline-0 focus:ring-2 focus:ring-white lg:text-lg ${
              errors.message ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
            }`}
            rows={4}
            aria-invalid={errors.message ? 'true' : 'false'}
            onFocus={() => setMessageFieldFocused(true)}
            {...register('message', {
              required: t.form.messages.fieldRequired,
              onBlur: () => setMessageFieldFocused(getFieldState('message').isDirty),
            })}
          />
        </div>
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

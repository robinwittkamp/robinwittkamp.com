import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import LinkButton from '../components/Buttons/LinkButton';
import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import SocialLinks from '../components/Socials/SocialLinks';
import Heading from '../components/Text/Heading';
import localDe from '../locales/de/contact';
import localEn from '../locales/en/contact';
import PaperPlaneIcon from '../public/icons/fa-solid/paper-plane-solid.svg';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const FormFieldError = ({ children }: { children: string }) => (
  <p className="mt-2 text-sm text-[#ff0000]">{children}</p>
);

const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("example"))

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
            <Heading variant="h5" classes="">
              {t.contactInformation.email}
            </Heading>
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
            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Field: Name */}
              <div className="">
                {/* Label */}
                {/* <div className="">
                  <label htmlFor="name">{t.form.fields.name}</label>
                </div> */}
                {/* Input */}
                <input
                  id="name"
                  className="block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 px-4 py-3 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:ring-2 focus:ring-white lg:text-lg"
                  type="text"
                  placeholder={t.form.fields.name}
                  {...register('name', { required: true })}
                />
                {/* Error */}
                {errors.name && <FormFieldError>Fill out this field.</FormFieldError>}
              </div>

              {/* Field: Email */}
              <div className="">
                {/* Label */}
                {/* <div className="">
                  <label htmlFor="email">{t.form.fields.email}</label>
                </div> */}
                {/* Input */}
                <input
                  id="email"
                  className="block w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 px-4 py-3 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:ring-2 focus:ring-white lg:text-lg"
                  type="email"
                  placeholder={t.form.fields.email}
                  {...register('email', { required: true })}
                />
                {/* Error */}
                {errors.email && <FormFieldError>Fill out this field.</FormFieldError>}
              </div>

              {/* Field: Message */}
              <div className="">
                {/* Label */}
                {/* <div className="">
                  <label htmlFor="message">{t.form.fields.message}</label>
                </div> */}
                {/* Input */}
                <textarea
                  id="message"
                  className="block max-h-[32rem] min-h-[8rem] w-full rounded-xl border-0 border-t border-rusty-700 bg-rusty-800 px-4 py-3 text-white transition placeholder:text-rusty-300 focus:border-rusty-700 focus:ring-2 focus:ring-white lg:text-lg"
                  placeholder={t.form.fields.message}
                  {...register('message', { required: true })}
                />
                {/* Error */}
                {errors.message && <FormFieldError>Fill out this field.</FormFieldError>}
              </div>

              {/* Field: Button */}
              {/* <button className="" type="submit">
                {t.form.fields.submit}
              </button> */}
              <LinkButton href="/" variant="secondary">
                <PaperPlaneIcon className="h-4" fill="currentColor" />
                <span className="ml-3">{t.form.fields.submit}</span>
              </LinkButton>
            </form>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;

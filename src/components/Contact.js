import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import * as Yup from 'yup';
import map from '../assets/images/map.png';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Email is invalid').required('Please enter your email address'),
    message: Yup.string().required('Please enter a message'),
  });

  const handleSubmit = (values) => {
    fetch('https://formspree.io/f/xpznywyd',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values }),
      });
  };

  const renderError = (message) => <span className="text-red-600">{message}</span>;

  return (
    <section className="px-8 py-12 md:p-14 lg:p-24 text-slate-300" id="contact">
      <div className="grid grid-cols-12 grid-rows-2 md:grid-rows-1 gap-4">
        <div className="md:col-[_1/_7] md:row-[_1/_-1] col-[_1/_-1] row-[_1/_2] flex flex-col justify-center">
          <header className="wow pulse flex justify-center text-4xl mb-5 p-3">
            <h2 className="p-3 border-0 border-b-2 border-green">Contact me</h2>
          </header>
          <h2 className="wow fadeInDown p-3 mb-5">
            I&apos;m always interested in hearing about new projects,
            if you&apos;d like me to build an application or a feature,
            you can get in touch with me here.
          </h2>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();
              }}
            >
              <Form className="wow fadeInDown flex flex-col gap-3">
                <div className="flex xsm:flex-col gap-3 w-full">
                  <div className="flex flex-col xsm:w-full w-1/2">
                    <Field
                      name="name"
                      type="text"
                      className="bg-ligth-navy text-xl p-3 w-full"
                      placeholder="Name"
                    />
                    <ErrorMessage name="name" render={renderError} />
                  </div>
                  <div className="flex flex-col xsm:w-full w-1/2">
                    <Field
                      name="email"
                      type="email"
                      className="bg-ligth-navy text-xl p-3 w-full"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </div>
                </div>
                <Field
                  name="subject"
                  type="text"
                  className="bg-ligth-navy text-xl p-3"
                  placeholder="Subject"
                />
                <Field
                  as="textarea"
                  name="message"
                  type="text"
                  className="bg-ligth-navy text-xl p-3 min-h-[100px]"
                  placeholder="Message"
                />
                <ErrorMessage name="message" render={renderError} />
                <div className="flex justify-end">
                  <button type="submit" className="border px-10 py-3 border-green text-green hover:bg-slate-700">Send message!</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="wow fadeInDown md:col-[_7/_-1] md:row-[_1/_-1] col-[_1/_-1] row-[_2/_-1] h-[500px] md:h-auto border">
          <img className="w-full h-full" src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

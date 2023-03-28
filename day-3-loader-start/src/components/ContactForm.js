import { useFormik, FormikProvider, Form, useField } from 'formik';
import * as yup from 'yup'; //validation
import React from 'react';




const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const handleChange = () => handleChange()
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      }`}
    >
      <div className="flex items-start space-between flex-col gap-1">
        <label htmlFor={props.id}>{label}</label>{' '}
        {showFeedback ? (
          <div id={`${props.id}-feedback`} aria-live="polite" className="feedback text-sm self-end text-blue-900">
            {meta.error ? meta.error : '✓'}
          </div>
        ) : null}
      </div>
      <input
      className='border border-gray-200 px-2 rounded-md w-full h-12 '
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs my-2" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};



const validationSchema = yup.object({
    name: yup.string()
        .min(8, 'Must be at least 8 characters')
        .max(20, 'Must be less  than 20 characters')
        .required('Name is required')
        .matches(
          /^[a-zA-Z0-9]+$/,
          'Cannot contain special characters or spaces'
        ),
    email: yup.string().email()
        .required('Email is required')
        .mi
})

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values) => {
            //api callet ved ekte skjema, vi konsoller bare submiten. Så vil typisk vøre async
            console.log(values)
        }
    });

    return ( 
        <FormikProvider value={formik}>
        <form 
        onSubmit={formik.handleSubmit} 
        onChange={formik.handleChange} className="mt-16">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <TextInputLiveFeedback 
                    label='Name'
                    id='name'
                    name='name'
                    helpText='Write your name'
                    type='text'
                    value={formik.values.name} />
            </div>
            <div className="sm:col-span-2">
                <TextInputLiveFeedback 
                    label='Email'
                    id='email'
                    name='email'
                    helpText='Your email'
                    type='email'
                    value={formik.values.email} />
            </div>
            <div className="sm:col-span-2">
                <div className="flex justify-between text-sm leading-6">
                    <label for="message" className="block text-sm font-semibold leading-6 text-gray-900">How can we help you?</label>
                    <p id="message-description" className="text-gray-400">Max 500 characters</p>
                </div>
                <div className="mt-2.5">
                    <textarea id="message" name="message" rows="4" aria-describedby="message-description" maxLength={500} value={formik.values.message} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
        </div>
        <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
            <button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Send message</button>
        </div>
    </form>
    </FormikProvider>
     );
}
 
export default ContactForm;
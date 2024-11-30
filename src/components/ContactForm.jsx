import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Contact Form",
          from_email: form.email,
          to_email: "sadiksefa@hotmail.com.tr",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
    >
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email address?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />
      </label>
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea
          rows={7}
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='What would you like to say?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />
      </label>

      <button
        type='submit'
        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm; 
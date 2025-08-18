'use client';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal'; // đảm bảo đường dẫn đúng
import { useRef } from 'react';



export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔔 sendEmail called'); // debug
  
    // emailjs.sendForm(
    //   'service_vkstr0f',
    //   'template_mrfvfk6',
    //   formRef.current!,
    //   'Rkt3XmlYLrQZp7tDG' // hoặc publicKey
    // )
    // .then(() => {
    //   alert("Email sent successfully!");
    // })
    // .catch((error) => {
    //   console.error("Failed to send email:", error);
    // });
    const serviceID = "service_vkstr0f";
    const templateID = "template_kx1lh2a";
    const userID = "Rkt3XmlYLrQZp7tDG";
    try {
      const emailParams = {
        name: fields.name,
        email: fields.email,
        message: fields.message,
        subject: fields.subject,
      };
      console.log(emailParams);
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        alert("Email sent successfully!");
        setFields({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };
  
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // const submit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   alert('Submitted!');
  // };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gradient-to-r from-black to-blue-900 text-white">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left: Contact Form */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
              Submit Demo Or Have Questions? <br /> Let&apos;s chat.
            </h3>
            <form ref={formRef} className="space-y-3 sm:space-y-4" onSubmit={sendEmail}>
              <input
                name="name"
                value={fields.name}
                onChange={handle}
                placeholder="Name"
                className="w-full p-3 sm:p-3.5 border rounded bg-white placeholder-gray-600 text-black"
                required
              />
              <input
                name="email"
                type="email"
                value={fields.email}
                onChange={handle}
                placeholder="Email"
                className="w-full p-3 sm:p-3.5 border rounded bg-white placeholder-gray-600 text-black"
                required
              />
              <input
                name="subject"
                value={fields.subject}
                onChange={handle}
                placeholder="Subject"
                className="w-full p-3 sm:p-3.5 border rounded bg-white placeholder-gray-600 text-black"
                required
              />
              <textarea
                name="message"
                value={fields.message}
                onChange={handle}
                placeholder="Message"
                className="w-full p-3 sm:p-3.5 border rounded bg-white placeholder-gray-600 text-black"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded hover:bg-gray-900 hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Logo or Illustration */}
          <div className="flex justify-center">
            <Image
              src="https://github.com/Hoangchat/zirectlabel/blob/main/public/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="object-contain rounded-xl border-4 border-gray-300 w-40 h-40 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px]"
            />
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

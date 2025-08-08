'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal'; // đảm bảo đường dẫn đúng

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Submitted!');
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-black to-blue-900 text-white">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">
              Still have questions? <br /> Let&apos;s chat.
            </h3>
            <form className="space-y-4" onSubmit={submit}>
              <input
                name="name"
                value={fields.name}
                onChange={handle}
                placeholder="Name"
                className="w-full p-3 border rounded bg-white placeholder-gray-600"
                required
              />
              <input
                name="email"
                type="email"
                value={fields.email}
                onChange={handle}
                placeholder="Email"
                className="w-full p-3 border rounded bg-white placeholder-gray-600"
                required
              />
              <input
                name="subject"
                value={fields.subject}
                onChange={handle}
                placeholder="Subject"
                className="w-full p-3 border rounded bg-white placeholder-gray-600"
                required
              />
              <textarea
                name="message"
                value={fields.message}
                onChange={handle}
                placeholder="Message"
                className="w-full p-3 border rounded bg-white placeholder-gray-600"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded hover:bg-gray-900 hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Logo or Illustration */}
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="object-contain rounded-xl border-4 border-gray-300"
            />
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Learning from '/src/assets/Learning.svg';
import { Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formspree.io/f/xqalaewk', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Element name="contact">
      <section className="min-h-screen yellowbg bluedark px-6 md:px-16 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center md:text-left">
          {t('contact_me')}
        </h2>

        <div className="flex flex-col md:flex-row items-stretch gap-16">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={Learning}
              alt={t('contact_me')}
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>

          <div className="flex-1 text-white flex flex-col justify-between space-y-6">
            <p className="text-xl leading-relaxed whitespace-pre-line">{t('contact_intro')}</p>
            <p className="text-lg">
              <strong>Email:</strong>{' '}
              <a href="mailto:brian.castelhano@gmail.com" className="underline hover:text-yellow-300">
                brian.castelhano@gmail.com
              </a>
            </p>

            {status !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('form.name_placeholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-600"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('form.email_placeholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-600"
                />
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder={t('form.message_placeholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-600 resize-none"
                ></textarea>
                <button
  type="submit"
  disabled={status === 'sending'}
  className="bg-white text-black font-semibold px-6 py-3 rounded-2xl shadow-md 
             hover:bg-gray-200 hover:scale-105 hover:shadow-lg 
             transition-transform duration-300 disabled:opacity-50 cursor-pointer"
>
  {status === 'sending' ? t('sending') : t('send_message')}
</button>
              </form>
            )}

            {status === 'success' && (
              <p className="text-green-300 font-semibold text-lg">{t('success_message')}</p>
            )}

            {status === 'error' && (
              <p className="text-red-500 font-semibold text-lg">{t('error_message')}</p>
            )}

            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/brian-castelhano-ba9b4a25b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <Linkedin size={24} />
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

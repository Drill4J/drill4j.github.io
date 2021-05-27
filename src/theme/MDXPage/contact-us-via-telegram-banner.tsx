import React from 'react';
import { Icon } from '../../components';

export const ContactUsViaTelegramBanner = () => (
  <div
    className="flex justify-center items-center flex-wrap gap-6 py-10 px-5 text-center"
    style={{ background: 'linear-gradient(172.73deg, #68ADF4 5.66%, #3F88E2 94.34%)' }}
  >
    <p className="text-monochrome-white">
      <strong>Still have questions with installation?</strong> Chat with us in Telegram channel
    </p>
    <a
      className="flex items-center gap-x-2 py-1 px-8 text-blue-default bg-monochrome-white rounded-3xl font-bold hover:outline-none"
      href="https://t.me/drill4j"
    >
      <Icon src="img/telegram-logo.svg" width={16} height={12} /> Telegram
    </a>
  </div>
);

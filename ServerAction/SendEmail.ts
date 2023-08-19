'use server';

import { Resend } from 'resend';
import { ContactFormEmail } from '@/email/Contact-form-email';
import React from 'react';
import { env } from '@/env';

const api_key = env.NEXT_PUBLIC_RESEND_APIKEY;

const resend = new Resend(api_key);

const getErrorMessage = (e: unknown): string => {
  let message: string;

  if (e instanceof Error) {
    message = e.message;
  } else if (e && typeof e === 'object' && 'message' in e) {
    message = String(e.message);
  } else if (typeof e === 'string') {
    message = e;
  } else {
    message = 'Unknown error';
  }

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (
    !message ||
    typeof message !== 'string' ||
    !senderEmail ||
    typeof senderEmail !== 'string'
  ) {
    return {
      error: 'Invalid message or mail address',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'obiorapaschalugwu@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      // text: message,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (e: unknown) {
    return {
      error: getErrorMessage(e),
    };
  }

  return {
    data,
  };
};

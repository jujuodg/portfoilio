import zod from 'zod';

const envSchema = zod.object({
  NEXT_PUBLIC_RESEND_APIKEY: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);

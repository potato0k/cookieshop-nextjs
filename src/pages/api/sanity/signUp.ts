// pages/api/sanity/signUp.ts
import { signUpHandler } from 'next-auth-sanity';
import { client } from '@sanity/lib/client';

export default signUpHandler(client);

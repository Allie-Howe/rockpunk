import NextAuth, { AuthError } from 'next-auth';
import { authConfig } from './auth.config';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from './lib/definitions';
import { sql } from '@vercel/postgres';
import { compare } from 'bcryptjs';


async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function createUser(formData: FormData) {
  const parsedData = registerSchema.safeParse(Object.fromEntries(formData))

  if (!parsedData.success) throw new Error(`Please check your info`)

  const {name, email, password} = parsedData.data

  try {
    // TODO: DON'T STORE UNHASHED PASSWORDS
    const user = await sql<User>`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
})

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [credentials({
    async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials)

        if (parsedCredentials.success) {
          const {email, password} = parsedCredentials.data
          const user = await getUser(email);
          if (!user) return null
          const passwordsMatch = await compare(password, user.password)

          if (passwordsMatch) return user
        }

        console.error('Invalid credentials')
        return null;
    }
  })]
});

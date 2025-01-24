'use client';

import { DefaultValues, FieldValues, Path, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FIELD_NAMES } from '../constants';
import Link from 'next/link';

interface Props<T extends FieldValues> {
  type: 'SIGN_IN' | 'SIGN_UP';
  defaultValues: DefaultValues<T>;
  schema: ZodType<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

function AuthForm<T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) {
  const isSignIn = type === 'SIGN_IN';
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  async function handleSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">
            {isSignIn ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-balance text-sm text-muted-foreground">
            {isSignIn
              ? 'Sign in to your account to continue'
              : 'Enter your details to create your new account'}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-full">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button variant="outline" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with GitHub
          </Button>
        </div>
        <div className="text-center text-sm">
          <span>
            {isSignIn ? 'Don’t have an account? ' : 'Already have an account? '}
          </span>
          <Link
            href={isSignIn ? '/sign-up' : '/sign-in'}
            className="hover:underline hover:underline-offset-4 "
          >
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default AuthForm;

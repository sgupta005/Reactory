'use client';
import AuthForm from '@/features/auth/components/AuthForm';
import { signInSchema } from '@/features/auth/schemas/auth';

function SignIn() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      onSubmit={() => {}}
      defaultValues={{ emailOrUsername: '', password: '' }}
    />
  );
}

export default SignIn;

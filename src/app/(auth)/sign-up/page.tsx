'use client';
import AuthForm from '@/features/auth/components/AuthForm';
import { signUpSchema } from '@/features/auth/schemas/auth';

function Signup() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      onSubmit={() => {}}
      defaultValues={{ fullName: '', username: '', email: '', password: '' }}
    />
  );
}

export default Signup;

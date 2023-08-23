import { Button } from '@chakra-ui/react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const SignInButton = () => {
  return <Button onClick={() => signIn('github')}>Sign In</Button>;
};

export const SignOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await signOut({ redirect: false });

    router.refresh();
  };

  return <Button width='100%' rounded='none' bg='transparent' onClick={handleClick}>Sign Out</Button>;
};
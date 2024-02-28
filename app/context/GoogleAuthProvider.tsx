'use client';
import { SessionProvider } from 'next-auth/react';

export default function GoogleAuthProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>;
}

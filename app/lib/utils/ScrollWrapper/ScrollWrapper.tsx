'use client';
import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
/**
 * When the pathname changes, scroll to the top of the page.
 * @returns The children prop.
 */
export function ScrollWrapper({ children }: { children: JSX.Element }) {
  const pathname = usePathname();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);
  return children;
}

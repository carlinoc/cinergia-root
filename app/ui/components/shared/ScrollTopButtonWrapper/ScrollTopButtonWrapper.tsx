'use client';
import {
  useState,
  useEffect,
  MouseEvent,
  TouchEvent,
  KeyboardEvent,
} from 'react';
import { ScrollTopButtonWrapperProps } from './ScrollTopButtonWrapper.model';

export function ScrollTopButtonWrapper({
  children,
}: ScrollTopButtonWrapperProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {children}
      <button
        type="button"
        className={`z-[100] fixed bottom-5 right-5 button-primary padding-icon ${isScrolled ? '' : 'hidden'}`}
        title="Ir arriba"
        aria-label="Ir arriba"
        onClick={(e) => handleButtonClick(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-up"
          width={34}
          height={34}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 15l6 -6l6 6" />
        </svg>
      </button>
    </div>
  );
}

'use client';
import {
  useEffect,
  useRef,
  MouseEvent,
  TouchEvent,
  KeyboardEvent,
} from 'react';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';
import { ModalProps } from '../Modal.model';

/**
 * Modal Component
 *
 * The Modal component provides a container for displaying content in a modal overlay.
 * It supports opening and closing the modal, and it prevents scrolling on the background
 * when the modal is open. It also includes a close button and supports clicking outside
 * the modal to close it.
 *
 * @component
 * @param {ModalProps} props - Props for configuring the Modal component.
 * @param {boolean} props.openModalState - State indicating whether the modal is open or closed.
 * @param {function} props.handleOpenModal - Function to handle opening and closing of the modal.
 * @returns {JSX.Element} - JSX element representing the Modal component.
 */

export function VideoPlayerModal({
  children,
  openModalState,
  handleOpenModal,
}: ModalProps) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (openModalState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [openModalState]);

  useOnClickOutside(modalRef, () => {
    handleOpenModal(!openModalState);
  });

  const handleClose = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
    e.preventDefault();
    handleOpenModal(!openModalState);
  };

  return (
    <section className="z-[60] fixed inset-0 flex flex-col justify-center items-center gap-8 w-full h-screen bg-dark-950/80 backdrop-blur-sm">
      <button
        type="button"
        className="button-secondary padding-icon"
        title="Cerrar"
        aria-label="Cerrar"
        onClick={(e) => handleClose(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <article
        ref={modalRef}
        className="overflow-hidden relative w-11/12 md:w-8/12 aspect-video rounded-sm bg-bgPrimaryDark"
      >
        {children}
      </article>
    </section>
  );
}

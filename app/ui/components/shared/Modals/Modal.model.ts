import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  children: JSX.Element;
  openModalState: boolean;
  handleOpenModal: Dispatch<SetStateAction<boolean>>;
}

import { InputHTMLAttributes } from 'react';
export interface InputSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'SM' | 'LG';
}

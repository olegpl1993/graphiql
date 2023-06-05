import React from 'react';
import './index.scss';

interface validErrorProps {
  message: string | undefined;
}

function InputError({ message }: validErrorProps) {
  return <p className="input-error">{message}</p>;
}

export default InputError;

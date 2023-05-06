import './Modal.scss';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

const modalRootElement = document.getElementById('modal') as HTMLElement;

interface Props {
  modalActiv: boolean;
  setModalActiv: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal(props: Props) {
  const { modalActiv, setModalActiv, children } = props;
  const element = document.createElement('div');

  useEffect(() => {
    document.body.style.overflow = modalActiv ? 'hidden' : 'auto';
    modalRootElement?.appendChild(element);
    return () => {
      document.body.style.overflow = 'auto';
      modalRootElement?.removeChild(element);
    };
  });

  if (modalActiv) {
    return createPortal(
      <div className="modalWrapper" onClick={() => setModalActiv(false)}>
        <div className="modalBox" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            aria-label="Close"
            className="modalClose"
            onClick={() => setModalActiv(false)}
          />
          {children}
        </div>
      </div>,
      element
    );
  }
  return null;
}

export default Modal;

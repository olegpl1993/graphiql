import './Modal.scss';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

const modalRootElement = document.getElementById('modal') as HTMLElement;

interface Props {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal(props: Props) {
  const { modalActive, setModalActive, children } = props;
  const element = document.createElement('div');

  useEffect(() => {
    document.body.style.overflow = modalActive ? 'hidden' : 'auto';
    modalRootElement?.appendChild(element);
    return () => {
      document.body.style.overflow = 'auto';
      modalRootElement?.removeChild(element);
    };
  });

  if (modalActive) {
    return createPortal(
      <div className="modalWrapper" onClick={() => setModalActive(false)}>
        <div className="modalBox" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            aria-label="Close"
            className="modalClose"
            onClick={() => setModalActive(false)}
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

import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

export interface ModalOverlayProps {
  className?: string
  style?: string
  headerClass?: string
  header: string
  onSubmit?: ()=>void
  contentClass?: string 
  children?: ReactNode
  footerClass?: string
  footer: ReactNode 
}

export interface ModalProps extends ModalOverlayProps {
  show: boolean
  onCancel: ()=>void
  
}

const ModalOverlay = (props:ModalOverlayProps) => {
  const content = (
    <div className={`modal ${props.className}`} 
    // style={props.style}
    >
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook')!);
};

const Modal = (props: ModalProps) => {
  const nodeRef = React.useRef(null)
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition nodeRef={nodeRef}
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
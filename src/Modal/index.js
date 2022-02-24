import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

export const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className="modal">
        {children}
    </div>,
    document.getElementById('modal')
  );
}

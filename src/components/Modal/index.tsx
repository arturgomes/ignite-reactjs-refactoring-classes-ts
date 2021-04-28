import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import { ModalProps } from '../../types';

const usePrevious = <T extends unknown>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
    const [modalStatus, setModalStatus] = useState(isOpen);

    useEffect(() => {
        setModalStatus(isOpen);
    }, [isOpen]);

    return (
        <ReactModal
            shouldCloseOnOverlayClick={!false}
            onRequestClose={setIsOpen}
            isOpen={modalStatus}
            ariaHideApp={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#F0F0F5',
                    color: '#000000',
                    borderRadius: '8px',
                    width: '736px',
                    border: 'none',
                },
                overlay: {
                    backgroundColor: '#121214e6',
                },
            }}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
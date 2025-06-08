'use client';

import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  show: boolean;
  message: string;
  onHide?: () => void;
}

export default function Toast({ message, onHide, show }: ToastProps) {
  const [visible, setVisible] = useState(!!message);
  const delay = 10000; // 10 segundos

  useEffect(() => {
    if (show && message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onHide) onHide();
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show, message, onHide]);

  if (!visible) return <></>;

  return (
    <div
      className={`position-fixed start-50 translate-middle-x ${styles.toastContainer}`}
      aria-live="polite"
      aria-atomic="true"
      role="alert"
    >
      <div className="alert alert-success text-center m-0 shadow rounded-pill px-4 py-3">
        {message}
      </div>
    </div>
  );
}

import { Toast } from 'bootstrap';

export const runToastWarning = () => {
  const toastElements = document.querySelectorAll('.warningToast');

  toastElements.forEach((element) => {
    const toast = new Toast(element);

    toast.show();
  });
};

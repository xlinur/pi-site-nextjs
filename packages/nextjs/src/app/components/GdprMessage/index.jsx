import { useState, useEffect } from 'react';

const gdprKey = 'gdpr';

const checkIfAccepted = () => {
  try {
    const data = JSON.parse(localStorage.getItem(gdprKey));

    return data?.accepted ?? false;
  } catch (err) {
    console.log(err);
  }

  return false;
};

const accept = () => {
  try {
    localStorage.setItem(
      gdprKey,
      JSON.stringify({
        accepted: true,
        date: new Date().toDateString(),
      }),
    );
  } catch (err) {
    console.log(err);
  }

  return false;
};

const GdprMessage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!checkIfAccepted()) {
        setShowModal(true);
      }
    }
  }, []);

  const onAccept = () => {
    accept();
    setShowModal(false);
  };

  return showModal ? (
    <div>
      <div>Message</div>
      <button onClick={onAccept}>Accept</button>
    </div>
  ) : null;
};

export default GdprMessage;

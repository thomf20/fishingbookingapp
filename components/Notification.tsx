import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error'; // Olika typer av meddelanden
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  const styles = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: type === 'success' ? 'green' : 'red',
    textAlign: 'center',
  };

  return <div style={styles}>{message}</div>;
};

export default Notification;

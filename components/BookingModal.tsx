import { useState } from 'react';

interface BookingModalProps {
  boatName: string;
  onClose: () => void;
  onConfirm: (date: string) => void;
}

function BookingModal({ boatName, onClose, onConfirm }: BookingModalProps) {
  const [date, setDate] = useState('');

  const handleConfirm = () => {
    if (date) {
      onConfirm(date);
      onClose();
    } else {
      alert('Please select a date');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2>Book {boatName}</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
        />
        <div>
          <button
            onClick={handleConfirm}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'gray',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;

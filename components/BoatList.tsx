import { useState } from 'react';
import BoatCard from './BoatCard';
import BookingModal from './BookingModal';

const boats = [
  { name: 'Pike boat', description: 'Fishing for pike' },
  { name: 'Perch boat', description: 'Fishing for perch' },
  { name: 'Zander boat', description: 'Fishing for zander' },
  { name: 'Allround boat', description: 'Allround fishing boat' },
];

function BoatList() {
  const [selectedBoat, setSelectedBoat] = useState<string | null>(null);
  const [bookings, setBookings] = useState<{ boat: string; date: string }[]>([]);
  const [showAllBookings, setShowAllBookings] = useState(false);

  const handleBook = (boatName: string) => {
    setSelectedBoat(boatName);
  };

  const handleCloseModal = () => {
    setSelectedBoat(null);
  };

  const handleConfirmBooking = (date: string) => {
    const today = new Date();
    const selectedDate = new Date(date);

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('You cannot book for past dates.');
      return;
    }

    const isAlreadyBooked = bookings.some(
      (booking) => booking.boat === selectedBoat && booking.date === date
    );

    if (isAlreadyBooked) {
      alert('This boat is already booked on the selected date.');
      return;
    }

    setBookings((prev) => [...prev, { boat: selectedBoat as string, date }]);
    alert(`Booked ${selectedBoat} for ${date}`);
    setSelectedBoat(null);
  };

  const handleShowAllBookings = () => {
    setShowAllBookings(true);
  };

  const handleCloseAllBookings = () => {
    setShowAllBookings(false);
  };

  return (
    <div>
      {boats.map((boat) => (
        <BoatCard
          key={boat.name}
          name={boat.name}
          description={boat.description}
          onBook={() => handleBook(boat.name)}
        />
      ))}
      <button
        onClick={handleShowAllBookings}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'whitesmoke',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show All Bookings
      </button>
      {selectedBoat && (
        <BookingModal
          boatName={selectedBoat}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
        />
      )}
      {showAllBookings && (
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
              color: 'black'
            }}
          >
            <h2>All Bookings</h2>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <p key={index}>
                  {booking.boat} - {booking.date}
                </p>
              ))
            ) : (
              <p>No bookings yet.</p>
            )}
            <button
              onClick={handleCloseAllBookings}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: 'gray',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoatList;

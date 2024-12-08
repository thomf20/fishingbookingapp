interface BoatCardProps {
  name: string;
  description: string;
  onBook: () => void;
}

function BoatCard({ name, description, onBook }: BoatCardProps) {
  return (
    <div
      onClick={onBook}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        textAlign: 'center',
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BoatCard;

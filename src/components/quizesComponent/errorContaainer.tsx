export default function ErrorContainer({ message }: { message: string }) {
  return (
    <div className="errorContainer">
      <h2>{message}</h2>
    </div>
  );
}

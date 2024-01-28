export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="container d-flex align-items-center flex-column py-4">
      <h2 className="text-center">
        Name must be 2 or more characters long, the email must be a valid email
        address, message must be 12 or more characters long.
      </h2>
      <button className="btn btn-primary btn-xl" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

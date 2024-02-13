import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">The ticktes are not here</h2>
      <p>W could not find the ticket page you are looking</p>
      <p>
        Go back to all <Link href="/tickets">Tickets</Link>{" "}
      </p>
    </main>
  );
};

export default NotFound;

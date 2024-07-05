import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

const Tickets = () => {
  return (
    <main>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
        <div>
          <Link href="/tickets/create">
            <button className="btn-primary">Create tickets</button>
          </Link>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;

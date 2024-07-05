"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

async function getTickets() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  const data = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return data.json();
}

const TicketList = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getTickets(),
    queryKey: ["tickets"], //Array according to Documentation
  });
  // console.log("Loading", data);

  const tickets = data;
  if (isLoading) return "Loading...";
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority}priority
            </div>
          </Link>
        </div>
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
};

export default TicketList;

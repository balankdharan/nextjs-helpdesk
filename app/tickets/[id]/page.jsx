import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch(`http://localhost:4000/tickets/`);
  const tickets = await data.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTickets(id) {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  const data = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!data.ok) {
    notFound();
  }
  return data.json();
}

const TicketDetails = async ({ params }) => {
  const ticket = await getTickets(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority}priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;

import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }
  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTickedData = {};
  if (EDITMODE) {
    updateTickedData = await getTicketById(params.id);
    console.log(updateTickedData);
  }
  return (
    <div>
      <TicketForm />
    </div>
  );
};

export default TicketPage;

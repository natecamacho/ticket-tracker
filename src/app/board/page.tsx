import StatusColumn from "../ui/board/status-column";
import TicketColumn from "../ui/board/ticket-column";

export default function Board() {
  return (
    <>
      <div className="flex flex-col h-full">
        Team Board
        <div className="flex flex-grow h-full">
          <StatusColumn status={"Up Next"} />
          <StatusColumn status={"In Progress"} />
          <StatusColumn status={"Done"} />
        </div>
        <div className="flex flex-none h-full">
          <TicketColumn />
          <TicketColumn />
          <TicketColumn />
        </div>
      </div>
    </>
  );
}

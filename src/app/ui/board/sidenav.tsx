import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-2 py-4">
      <Link
        className="mb-2 flex h-40 items-end justify-start rounded-md bg-blue-600 p-4"
        href="/"
      >
        Nate&apos;s Ticket Tracker
      </Link>
      <div className="flex grow flex-col justify-between space-x-0 space-y-2">
        <NavLinks />
        <div className="block h-auto w-full grow rounded-md bg-gray-50"></div>
      </div>
    </div>
  );
}

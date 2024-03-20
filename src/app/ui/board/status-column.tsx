export default function StatusColumn({ status }: { status: string }) {
  return (
    <div className="flex w-80 h-12 bg-slate-200 mr-4 mt-4 items-center justify-center rounded-md">
      {status}
    </div>
  );
}

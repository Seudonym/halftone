export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="size-fit inline-flex items-center border-2 border-black bg-white px-2 py-1 font-mono tracking-widest text-xs uppercase">
    {children}
  </span>
);

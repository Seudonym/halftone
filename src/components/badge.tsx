export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center border-2 border-black bg-white px-3 py-1 font-mono tracking-widest text-xs uppercase">
    {children}
  </span>
);

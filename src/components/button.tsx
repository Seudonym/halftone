export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="group relative inline-block cursor-pointer size-fit"
  >
    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black border-2 border-black" />
    <div className="relative border-2 border-black p-1 dithered-fill flex justify-between items-center select-none bg-white group-active:translate-x-1 group-active:translate-y-1">
      <span className="bg-white px-2 border border-black text-xs text-black font-mono tracking-widest">
        {children}
      </span>
    </div>
  </button>
);

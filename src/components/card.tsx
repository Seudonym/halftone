interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="size-fit relative inline-block">
      {/* Header */}
      <div className="relative z-10 border-2 border-black bg-white min-w-70 flex flex-col">
        {title && (
          <div className="border-b-2 border-black p-1 dithered-fill flex justify-between items-center select-none">
            <span className="bg-white px-2 border border-black text-xs font-black uppercase tracking-widest text-black">
              {title}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-4 flex flex-col gap-3 font-mono text-sm text-black">
          {children}
        </div>

        {/* Footer */}
        <div className="h-2 dithered-fill border-t-2 border-black" />
      </div>

      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border-2 border-black bg-black" />
    </div>
  );
};

import { useCallback, useId, useRef } from "react";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const focusableSelector =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Overlay = ({ isOpen, onClose, title, children }: OverlayProps) => {
  const titleId = useId();
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const restoreFocusAndClose = useCallback(() => {
    previousFocusRef.current?.focus();
    onClose();
  }, [onClose]);

  const saveAndFocusRef = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      previousFocusRef.current = activeElement;
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      ref={saveAndFocusRef}
    >
      <button
        type="button"
        className="dither-overlay absolute inset-0"
        onMouseDown={restoreFocusAndClose}
        aria-label={`Close ${title}`}
      />
      <div
        className="relative z-10 border-2 border-black shadow-[8px_8px_0_#000] bg-white min-w-50 max-w-[90vw]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            restoreFocusAndClose();
            return;
          }
          if (event.key !== "Tab") return;
          const focusableElements = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              focusableSelector,
            ),
          );
          if (focusableElements.length === 0) {
            event.preventDefault();
            return;
          }
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          const activeElement = document.activeElement;
          if (event.shiftKey && activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
            return;
          }
          if (!event.shiftKey && activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }}
      >
        <div className="border-b-2 border-black p-1 dithered-fill flex justify-between items-center select-none">
          <span
            id={titleId}
            className="bg-white px-2 border border-black text-[10px] font-black uppercase tracking-widest text-black"
          >
            {title}
          </span>
          <button
            type="button"
            ref={(node) => node?.focus()}
            onClick={restoreFocusAndClose}
            className="w-5 h-5 bg-white border-2 border-black flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white active:translate-x-px active:translate-y-px transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-6 flex flex-col gap-4">{children}</div>
        <div className="h-3 dithered-fill border-t-2 border-black" />
      </div>
    </div>
  );
};

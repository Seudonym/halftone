import { Badge } from "#/components/badge";
import { Button } from "#/components/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="h-screen bg-white text-black">
      <div className="relative flex flex-col h-full items-center justify-center overflow-hidden border-2 border-black bg-white">
        {/* Header */}
        <div className="dithered-fill h-24 px-4 sm:px-8 flex justify-between items-center w-full border-b-2 border-black">
          <Badge>-&gt; Work In Progress</Badge>
          <div className="space-x-4">
            <a href="https://github.com/seudonym/halftone" target="_blank">
              <Button>GitHub</Button>
            </a>
            <Button>Docs</Button>
          </div>
        </div>

        <section className="relative z-10 flex max-w-6xl h-full flex-col items-center justify-around px-4 text-center">
          <Button>HALFTONE UI</Button>

          <h1 className="font-mono text-9xl font-black uppercase tracking-tight">
            Black
            <br />
            White
            <br />
            Noise
          </h1>

          <p className="mx-auto max-w-2xl border-y-2 border-black bg-white px-4 py-5 font-mono text-lg uppercase sm:text-base">
            A component library in progress. Built around stark contrast,
            dithered textures, and oversized typography.
          </p>
        </section>

        {/* Footer */}
        <div className="dithered-fill h-24 w-full border-t-2 border-black" />
      </div>
    </main>
  );
}

import { Badge } from "#/components/badge";
import { Button } from "#/components/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="h-screen bg-white text-black">
      <div className="relative flex h-full items-center justify-center overflow-hidden border-2 border-black bg-white">
        <div className="dithered-fill absolute left-0 top-0 h-24 w-full border-b-2 border-black opacity-100" />
        <div className="dithered-fill absolute bottom-0 right-0 h-28 w-full border-t-2 border-black opacity-100" />

        <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
          <Badge>-&gt; Work In Progress</Badge>
        </div>

        <section className="relative z-10 flex max-w-6xl flex-col items-center gap-16 px-4 text-center">
          <Button>HALFTONE UI</Button>

          <div className="space-y-16">
            <h1 className="font-mono text-9xl font-black uppercase leading-25 tracking-tight">
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
          </div>
        </section>
      </div>
    </main>
  );
}

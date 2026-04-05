import { Badge } from "#/components/badge";
import { Button } from "#/components/button";
import { Card } from "#/components/card";
import { Checkbox } from "#/components/checkbox";
import { Overlay } from "#/components/overlay";
import Hero from "#/sections/hero";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <div className="h-screen grid grid-cols-3 grid-rows-3 items-center justify-around ">
        <Badge>Badge</Badge>
        <Button>Button</Button>
        <Card title="Card Header">Card Content</Card>
        <Checkbox label="Checkbox" />
        <Button onClick={() => setIsOpen((prev) => !prev)}>Overlay</Button>
        <Overlay
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Overlay Header"
        >
          <p>Overlay Content</p>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
          <div className="mt-5 flex justify-between">
            <Button>Accept</Button>
            <Button>Reject</Button>
          </div>
        </Overlay>
      </div>
    </div>
  );
}

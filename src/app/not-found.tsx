"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-[10rem] font-bold">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-6">
        Oops! Page not found.
      </h2>
      <p className="mb-6 text-center max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="rounded-none"
        >
          Go Back
        </Button>
        <Button onClick={() => router.push("/")} className="rounded-none">
          Go Home
        </Button>
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center text-3xl text-red-500 bg-teal-950/10">
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

"use client";
import { SyncLoader } from "react-spinners";
// Add a declaration for the module to avoid TypeScript errors
import "./loadingContainer.scss";

export default function Loading({ message }: { message?: string }) {
  return (
    <div className="loadingScreen">
      <div className="loadingWrapper">
        <div className="animation">
          <SyncLoader />
        </div>
        <h1>{message ? message : "Loading..."}</h1>
      </div>
    </div>
  );
}

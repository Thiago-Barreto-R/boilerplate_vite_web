import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutProps) {
  return (
    <div className="bg-pantone-blue text-pantone-white flex min-h-screen w-full flex-col items-center justify-center gap-6 px-10">
      {children}
      <footer className="absolute bottom-0 left-0 flex w-full items-center justify-center">
        <p className="text-sm">Developed by Thiago B. Rodrigues</p>
      </footer>
    </div>
  );
}

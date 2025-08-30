"use client"; // harmless in React, just ignore if you want

import React from "react";
import { Analytics } from "trackcel";
import.meta.env.VITE_TRACKCEL_PROJECT_ID
import.meta.env.VITE_TRACKCEL_API_KEY

export default function RootLayout({ children }) {
  return (
     <html>
      <body>
        {children}
        <Analytics 
      projectId={import.meta.env.VITE_TRACKCEL_PROJECT_ID}
      apiKey={import.meta.env.VITE_TRACKCEL_API_KEY}
      debug={true}
    />
      </body>
    </html>
  );
}
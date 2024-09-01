"use client"

import { SessionProvider } from "next-auth/react";

function NexAuthProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>
}

export default NexAuthProvider
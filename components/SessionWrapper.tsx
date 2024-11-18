"use client";
import { SessionProvider } from "next-auth/react";
import React from "react"

const SessionWrapper = ({ childern }: {children: React.ReactNode}) =>{
    return{
        <SessionProvider/>
    }
}

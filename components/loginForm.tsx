"use client" 

import { useState } from 'react';

export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="Email" className="border p-2 rounded" />
            <input type="password" placeholder="Password" className="border p-2 rounded" />
            <button type="submit" className="bg-[var(--brand-dark)] text-white p-2 rounded">Submit</button>
        </form>
    )
}

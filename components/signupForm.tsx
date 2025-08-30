"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password) {
      setError("Fill all fields");
      return;
    }

    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/");
      } else {
        setError(data.message || "Something went wrong");
        return;
      }
    } catch {
      console.log("error", error);
      setError("Server error please try again later");
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4">
      <input
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="First Name"
        className="border p-2 rounded"
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Last Name"
        className="border p-2 rounded"
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        className="border p-2 rounded"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />

      {error && <span className="text-red-500">{error}</span>}

      <button
        type="submit"
        className="bg-[var(--brand-dark)] text-white p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

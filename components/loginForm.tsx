"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      router.push("/");
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/2 font-normal text-[var(--primary)]">
      <h1 className="text-3xl font-medium text-[var(--primary)]">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="text"
            // placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[var(--accent)] p-3 rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            // placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[var(--accent)] p-3 rounded-[8px]"
          />
        </div>
        <span className="text-end">Forgot Password?</span>
        <button
          type="submit"
          className="bg-[var(--primary)] text-white font-semibold p-3 rounded-[8px]"
        >
          SIGN IN
        </button>
        <div className="flex items-center">
          <div className="flex-grow border-t border-[var(--accent)]"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-[var(--accent)]"></div>
        </div>
        <button className="flex justify-center items-center gap-2 border border-[var(--accent)] text-[var(--primary)] font-semibold p-3 rounded-[8px]">
          <Image alt="google" src="/icons/google.svg" width={20} height={20} />
          Sign in with google
        </button>
        <span className="text-center">
          Don't have an account?{" "}
          <a className="font-semibold" href="/signup">
            Sign up
          </a>
        </span>
      </form>
    </div>
  );
}

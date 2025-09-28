import LoginForm from "@/components/loginForm";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex col-row justify-center items-center h-screen">
      <div className="relative flex h-screen w-1/2 bg-[url('/images/login-bg-1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col text-white gap-[30px] pt-[100px] pl-[50px]">
          <h1 className="text-8xl font-light">Welcome !</h1>
          <h1 className="text-2xl font-light ml-[10px]">
            Descover new recipies, <br></br>Your now favorite food
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 h-screen w-1/2 bg-[var(--secondary2)]">
        <Image src="/images/logo.png" alt="logo" width={200} height={100} />
        <LoginForm />
      </div>
    </main>
  );
}

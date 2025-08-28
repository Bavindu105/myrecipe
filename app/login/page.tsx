import LoginForm from "@/components/loginForm";

export default function Login() {
    return (
        <main className="flex justify-center items-center h-screen">
            <div className="flex justify-center flex-col bg-[var(--brand-light)] p-10 gap-4">
                <h1 className="">Login</h1>
                <LoginForm />
                <span className=""><a href="/signup">create an account</a></span>
            </div>
        </main>
    )
}
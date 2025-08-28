import SignupForm from "@/components/signupForm";

export default function SignupPage() {
    return (
        <main className="flex justify-center items-center h-screen">
            <div className="flex justify-center flex-col bg-[var(--brand-light)] p-10 gap-4">
                <h1 className="">Sign Up</h1>
                <SignupForm />
                <span className=""><a href="/login">already have an account?</a></span>
            </div>
        </main>
    )
}
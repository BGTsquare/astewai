// src/app/login/page.tsx

import { signIn, signUp } from "@/services/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signIn}
      >
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <Label htmlFor="email">Email</Label>
        <Input
          className="mb-4"
          name="email"
          placeholder="you@example.com"
          required
        />
        <Label htmlFor="password">Password</Label>
        <Input
          className="mb-4"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button>Sign In</Button>

        <h2 className="text-center text-sm my-4">OR</h2>
        
        {/* The signUp action is passed to the formAction prop of the button */}
        <Button formAction={signUp} variant="outline">
          Sign Up
        </Button>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
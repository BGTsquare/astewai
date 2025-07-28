import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn, signUp } from "@/services/auth"; // We import our Server Actions here

export function LoginForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required />
      </div>
      <div className="flex gap-2">
        <Button formAction={signIn} className="w-full">
          Sign In
        </Button>
        <Button formAction={signUp} variant="secondary" className="w-full">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
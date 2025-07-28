import { createServer } from '@/lib/supabase/server';
import { signOut } from '@/services/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// This is a Server Component, so it can run async operations directly
export default async function User() {
  const supabase = createServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground hidden sm:inline-block">
          {user.email}
        </span>
        <form action={signOut}>
          <Button variant="outline" size="sm">
            Sign Out
          </Button>
        </form>
      </div>
    );
  }

  return (
    <Button asChild size="sm">
      <Link href="/login">
        Sign In
      </Link>
    </Button>
  );
}
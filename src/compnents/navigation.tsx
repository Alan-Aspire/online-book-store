import {
    SignInButton,
    SignOutButton,
    SignUpButton,
    // UserButton,
    SignedIn,
    SignedOut,
  } from "@clerk/nextjs";
  import Link from "next/link";
  export const Navigation = () => {
    return (
      <nav>
            <div>
              <h1>
                Next.js App
              </h1>
            </div>
            <div>
              <SignedOut>
                <SignInButton>
                  <button>
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button>
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/user-profile">Profile</Link>
                <SignOutButton />
              </SignedIn>
            </div>
      </nav>
    );
  };
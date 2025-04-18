"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

interface UserProfileProps {
  className?: string;
}

export function UserProfile({ className }: UserProfileProps) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <UserProfileSkeleton />;
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <UserButton 
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "h-8 w-8"
          }
        }}
      />
      {user && (
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-xs text-muted-foreground">
            {user.primaryEmailAddress?.emailAddress}
          </span>
        </div>
      )}
    </div>
  );
}

function UserProfileSkeleton() {
  return (
    <div className="flex items-center space-x-3">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
}
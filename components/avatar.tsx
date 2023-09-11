"use client"

import { cn } from "@/lib/utils";
import { User } from "@prisma/client"
import Image from "next/image";

interface AvatarProps {
  user: User;
  isLarge?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  user,
  isLarge,
}) => {
  return (
    <div className="">
      <div className={cn("relative inline-block rounded-full overflow-hidden border-4 border-white",
        isLarge ? 'h-32 w-32' : 'h-10 w-10'
      )}>
        <Image
          fill
          src={user?.profileImage || '/images/placeholder.png'}
          alt="Avatar"
        />
      </div>
    </div>
  )
}

export default Avatar

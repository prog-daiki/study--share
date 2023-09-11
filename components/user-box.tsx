"use client"

import { User } from "@prisma/client"
import Avatar from "./avatar"
import { useRouter } from "next/navigation";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({
  data
}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex  gap-4 hover:bg-white/10 transition rounded-md px-4 py-2 items-center cursor-pointer bg-white/5" onClick={() => router.push(`/users/${data.id}`)}>
        <Avatar user={data} />
        <div className="flex flex-col">
          <p className="text-white font-semibold text-sm">{data.name}</p>
          <p className="text-neutral-400 text-sm">@{data.username}</p>
        </div>
      </div>

    </>
  )
}

export default UserBox

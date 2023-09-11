"use client"

import { User } from "@prisma/client"
import { BiCalendar } from "react-icons/bi";
import { Button } from "./ui/button";
import { useMemo } from "react";
import { format } from 'date-fns';
import useEditModal from "@/hooks/useEditModal";

interface UserBioProps {
  user: User;
  currentUser: User;
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({
  user,
  currentUser,
  userId,
}) => {
  const editModal = useEditModal();
  const joinedDate = useMemo(() => {
    return format(new Date(user.createdAt), 'PP');
  }, [user.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button className="text-xl font-semibold bg-gray-500 p-6 hover:bg-gray-600" onClick={editModal.onOpen}>
            編集する
          </Button>
        ) : (
          <Button className="text-xl font-semibold bg-sky-500 p-6 hover:bg-sky-600">
            フォロー
          </Button>
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {user?.name}
          </p>
          <p className="text-md text-neutral-500">
            @{user?.username}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">
            {user?.bio}
          </p>
          <div
            className="
              flex
              flex-row
              items-center
              gap-2
              mt-4
              text-neutral-500
          ">
            <BiCalendar size={24} />
            <p>
              登録した日：
              <time dateTime={joinedDate}>
                {joinedDate}
              </time>
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{user?.followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{user?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div> */}

        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">100</p>
            <p className="text-neutral-500">フォロー</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">2000</p>
            <p className="text-neutral-500">フォロワー</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default UserBio

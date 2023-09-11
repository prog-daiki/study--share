
import getCurrentUser from '@/app/actions/getCurrentUser';
import UserBio from '@/components/user-bio';
import UserHero from '@/components/user-hero';
import useUser from '@/hooks/useUserId';
import React, { useMemo } from 'react'

interface IParams {
  userId: string;
}

const UserPage = async ({ params }: { params: IParams }) => {

  const userId = params.userId;
  const user = await useUser(userId);
  const currentUser = await getCurrentUser();

  return (
    <>
      <div className="text-white">
        <div className="border-b-[1px] border-neutral-500 px-4 pb-4">
          <h3 className="text-xl font-bold">プロフィール</h3>
        </div>
      </div>
      <UserHero user={user!} />
      <UserBio user={user!} currentUser={currentUser!} userId={userId} />
    </>
  )
}

export default UserPage

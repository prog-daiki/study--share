import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request,
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    name,
    username,
    bio,
    profileImage,
    coverImage
  } = body;

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      name,
      username,
      bio,
      profileImage,
      coverImage
    }
  });

  return NextResponse.json(user);

}

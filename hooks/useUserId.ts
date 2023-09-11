import prisma from "@/lib/prismadb";


const useUser = async (
  userId: string
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log(error, 'SERVER_ERROR')
    return null;
  }
}

export default useUser

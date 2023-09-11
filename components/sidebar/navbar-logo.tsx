"use client"

import { useRouter } from "next/navigation"
import { AiFillCodeSandboxSquare } from "react-icons/ai"

const NavbarLogo = () => {
  const router = useRouter();
  return (
    <div className="flex mb-12 space-x-2 cursor-pointer items-center" onClick={() => router.push('/dashboard')}>
      <AiFillCodeSandboxSquare size={28} color={'rgb(139 92 246)'} />
      <h1 className="font-bold text-2xl">Study Share</h1>
    </div>
  )
}

export default NavbarLogo

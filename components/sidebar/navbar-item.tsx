"use client"

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface NavbarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  color?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  color,
}) => {

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    router.push(`${href}`)
  }, [])

  return (
    <div className="flex flex-col w-full " onClick={handleClick}>
      <div className={cn("flex w-full hover:bg-white/10 transition rounded-lg p-4 space-x-4 cursor-pointer",
        pathname === href ? 'bg-white/10' : '')}>
        <Icon size={28} color={color} />
        <p className="font-bold">{label}</p>
      </div>
    </div>
  )
}

export default NavbarItem

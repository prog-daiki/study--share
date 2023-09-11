"use client"

import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import NavbarLogo from './navbar-logo';
import NavbarItem from './navbar-item';
import { signOut } from 'next-auth/react';
import { User } from '@prisma/client';

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({
  user
}) => {

  const items = [
    {
      label: 'ホーム',
      href: '/dashboard',
      icon: BsHouseFill,
      color: 'rgb(16 185 129)',
    },
    {
      label: '通知',
      href: '/notifications',
      icon: BsBellFill,
      color: 'rgb(6 182 212)'
    },
    {
      label: 'プロフィール',
      href: `/users/${user.id}`,
      icon: FaUser,
      color: 'rgb(190 24 93)'
    },
  ]

  return (
    <div className="hidden md:block w-1/4 p-4 text-white border-r-[1px] border-neutral-500 bg-black">
      <div className="flex flex-col p-5 w-full space-y-3">
        <NavbarLogo />
        {items.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            color={item.color}
          />
        ))}
        <NavbarItem label='ログアウト' icon={BiLogOut} onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })} />
        {/* <SidebarShareButton /> */}
      </div>

    </div>
  )
}

export default Navbar

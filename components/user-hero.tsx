import Image from "next/image";
import Avatar from "./avatar";
import { User } from "@prisma/client";

interface UserHeroProps {
  user: User;
}

const UserHero: React.FC<UserHeroProps> = ({
  user
}) => {
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {user?.coverImage && (
          <Image src={user.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }} />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar user={user} isLarge />
        </div>
      </div>
    </div>
  );
}

export default UserHero;

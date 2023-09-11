import { User } from "@prisma/client"
import Avatar from "../avatar"
import UserBox from "../user-box"

interface FollowBarProps {
  items: User[]
}

const FollowBar: React.FC<FollowBarProps> = ({
  items
}) => {
  return (
    <div className="w-1/4 bg-black p-4 border-l-[1px] border-neutral-500 hidden md:block">
      <div className="bg-neutral-800 p-4 w-full rounded-lg">
        <h2 className="font-bold text-white">おすすめのアカウント</h2>
        <div className="flex flex-col gap-6 mt-4">
          {items.map((item) => (
            <UserBox
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FollowBar

import getUsers from "@/app/actions/getUsers";
import FollowBar from "./follow-bar"
import Navbar from "./navbar";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = async ({ children }) => {
  const users = await getUsers();
  const currentUser = await getCurrentUser();
  return (
    <div className="w-full h-full">
      <div className="flex h-full">
        <Navbar user={currentUser!} />
        <div className="w-full md:w-2/4 bg-black py-4">
          {children}
        </div>
        <FollowBar items={users} />
      </div>
    </div>
  )
}

export default Sidebar


import Sidebar from "@/components/sidebar/sidebar";
import getCurrentUser from "../actions/getCurrentUser";

export default async function NotificationsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

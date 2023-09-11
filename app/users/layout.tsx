import EditModal from "@/components/modals/edit-modal";
import Sidebar from "@/components/sidebar/sidebar";
import getCurrentUser from "../actions/getCurrentUser";

export default async function UsersLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <Sidebar>
      <EditModal currentUser={currentUser!} />
      {children}
    </Sidebar>
  )
}

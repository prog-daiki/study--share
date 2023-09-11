import Sidebar from "@/components/sidebar/sidebar";

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

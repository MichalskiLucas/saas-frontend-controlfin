import Sidebar from "../components/SIdebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-8 bg-slate-100 min-h-screen">
        {children}
      </main>
    </div>
  )
}

import Sidebar from "@/Components/Sidebar";
import SidebarToggle from "@/Components/SidebarToggle";
import { SidebarProvider } from "@/Components/Context/SidebarContext.jsx";

export default function AppLayout({ children }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <Sidebar />

                <main className="flex-1 p-6">
                    <SidebarToggle />
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}

import Sidebar from "@/Components/Sidebar";
import SidebarToggle from "@/Components/SidebarToggle";
import { SidebarProvider } from "@/Components/Context/SidebarContext";
import TopBar from "@/Components/TopBar";

export default function AppLayout({ children }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    <div className="p-4 lg:hidden">
                        <SidebarToggle />
                    </div>

                    <TopBar />
                    <main className="p-6">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
}

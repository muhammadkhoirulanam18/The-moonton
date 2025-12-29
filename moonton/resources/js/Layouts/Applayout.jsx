import Sidebar from "@/Components/Sidebar/Sidebar"
import SidebarToggle from "@/Components/Sidebar/SidebarToggle";
import { SidebarProvider } from "@/Components/Context/SidebarContext";
import TopBar from "@/Components/Topbar/TopBar";
import { usePage } from "@inertiajs/react";

export default function AppLayout({ children }) {
    const { url } = usePage(); // ambil route aktif

    const hideTopBar = url === "/payments"; // halaman tanpa topbar

    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
                <Sidebar />

                <div className="flex-1 flex flex-col">
                    {/* Tampilkan TopBar hanya jika bukan halaman payments */}
                    {!hideTopBar && (
                        <div className="p-4 lg:p-0">
                            <TopBar />
                        </div>
                    )}

                    <main className="p-4 sm:p-6 lg:p-10">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
}

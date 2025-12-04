import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";

export default function AppLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <TopBar />
                <main className="flex-1 px-10 pb-10 pt-4 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

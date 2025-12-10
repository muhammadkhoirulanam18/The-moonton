import ProgressCard from "./SideBarProgressCard";
import { router, usePage } from "@inertiajs/react";
import { useSidebar } from "./Context/SidebarContext";

export default function Sidebar() {
    const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
    const { url } = usePage(); // aktif route

    const menuItem = (label, link, badge) => {
        const active = url === link;

        return (
            <li
                onClick={() => {
                    router.visit(link);
                    closeSidebar(); // tutup sidebar di mobile
                }}
                className={`cursor-pointer px-4 py-2 flex items-center justify-between rounded-xl transition
                ${
                    active
                        ? "bg-orange-500 text-white"
                        : "hover:bg-orange-100 dark:hover:bg-gray-700"
                }`}
            >
                <span>{label}</span>
                {badge && (
                    <span className="text-xs bg-orange-200 text-orange-600 px-2 py-0.5 rounded-full">
                        {badge}
                    </span>
                )}
            </li>
        );
    };

    return (
        <>
            {/* BACKDROP untuk mobile */}
            {isOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed lg:sticky top-0 left-0 z-50 h-screen w-64 
                    bg-white/70 dark:bg-gray-800 backdrop-blur-xl
                    border-r border-gray-200 dark:border-gray-700 
                    shadow-xl overflow-y-auto transition-transform duration-300

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between px-5 py-6">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => router.visit("/")}
                    >
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                            M
                        </div>
                        <span className="font-semibold text-lg">MoontoN</span>
                    </div>

                    <button
                        onClick={closeSidebar}
                        className="lg:hidden text-gray-500 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* USER PREVIEW */}
                {/* <div className="px-6 mb-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="/img/avatar.jpg"
                            className="w-10 h-10 rounded-full border border-orange-400"
                        />
                        <div>
                            <p className="font-semibold">Granola Sky</p>
                            <p className="text-xs text-orange-500">
                                Premium Member
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* MENU */}
                <nav className="px-4 text-sm space-y-6">
                    <div>
                        <p className="uppercase text-xs text-gray-400 mb-2 tracking-widest">
                            Menu
                        </p>
                        <ul className="space-y-2">
                            {menuItem("Discover", "/")}
                            {menuItem("Your Favorites", "/favorites")}
                            {menuItem("Downloads", "/downloads")}
                            {menuItem("Messages", "/messages", "102")}
                        </ul>
                    </div>

                    <div>
                        <p className="uppercase text-xs text-gray-400 mb-2 tracking-widest">
                            Others
                        </p>
                        <ul className="space-y-2">
                            {menuItem("Payments", "/payments")}
                            {menuItem("Analytics", "/analytics")}
                            {menuItem("Your Profile", "/profile")}
                            {menuItem("Logout", "/logout")}
                        </ul>
                    </div>
                </nav>

                <div className="p-4 mt-auto">
                    <ProgressCard />
                </div>
            </aside>
        </>
    );
}

import ProgressCard from "./SideBarProgressCard";
import { router, usePage } from "@inertiajs/react";
import { useSidebar } from "./Context/SidebarContext";
import {
    Home,
    Heart,
    Download,
    MessageCircle,
    CreditCard,
    BarChart3,
    User,
    LogOut,
} from "lucide-react";

export default function Sidebar() {
    const { isOpen, closeSidebar } = useSidebar();
    const { url } = usePage();

    /* =======================
       DATA MENU
    ======================= */
    const menuItems = [
        { label: "Discover", route: "/", icon: Home },
        { label: "Your Favorites", route: "/favorites", icon: Heart },
        { label: "Downloads", route: "/downloads", icon: Download },
        {
            label: "Messages",
            route: "/messages",
            icon: MessageCircle,
            badge: "102",
        },
    ];

    const otherItems = [
        { label: "Payments", route: "/payments", icon: CreditCard },
        { label: "Analytics", route: "/analytics", icon: BarChart3 },
        { label: "Your Profile", route: "/profile", icon: User },
        { label: "Logout", route: "/logout", icon: LogOut },
    ];

    /* =======================
       RENDER ITEM
    ======================= */
    const renderItem = (item) => {
        const Icon = item.icon;
        const active = url === item.route;

        return (
            <li
                key={item.label}
                onClick={() => {
                    router.visit(item.route);
                    closeSidebar();
                }}
                className={`
                    flex items-center justif    y-between gap-3 px-4 py-2 rounded-xl cursor-pointer transition
                    ${
                        active
                            ? "bg-orange-500 text-white"
                            : "hover:bg-orange-100 dark:hover:bg-gray-700"
                    }
                `}
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                </div>

                {item.badge && (
                    <span className="text-xs bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full">
                        {item.badge}
                    </span>
                )}
            </li>
        );
    };

    return (
        <>
            {/* BACKDROP MOBILE */}
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
                <div className="flex items-center gap-2">
                    <img
                        src="/assets/images/moonton.svg"
                        alt="MoontoN Logo"
                        className="w-auto h-auto p-5"
                    />
                </div>

                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <button
                        onClick={closeSidebar}
                        className="lg:hidden text-gray-500 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* MENU */}
                <nav className="px-4 text-sm space-y-6">
                    <div>
                        <p className="uppercase text-xs text-gray-400 mb-2 tracking-widest">
                            Menu
                        </p>
                        <ul className="space-y-2">
                            {menuItems.map(renderItem)}
                        </ul>
                    </div>

                    <div>
                        <p className="uppercase text-xs text-gray-400 mb-2 tracking-widest">
                            Others
                        </p>
                        <ul className="space-y-2">
                            {otherItems.map(renderItem)}
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

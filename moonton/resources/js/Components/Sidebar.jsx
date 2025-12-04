import ProgressCard from "./SideBarProgressCard";
import { router } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white/90 dark:bg-gray-800 shadow-xl border-r border-gray-100 dark:border-gray-700 transition-colors">
            <div className="px-6 pt-6 pb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black">
                    M
                </div>
                <span className="font-semibold text-lg">MoontoN</span>
            </div>

            <nav className="px-6 mt-6 text-sm font-medium space-y-6 flex-1">
                <div>
                    <p className="uppercase text-xs text-gray-400 mb-3 tracking-wide">
                        Menu
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-orange-500 bg-orange-50 rounded-xl px-3 py-2 cursor-pointer">
                            <span className="w-1.5 h-6 rounded-full bg-orange-500" />
                            <span>Discover</span>
                        </li>
                        <li
                            onClick={() => router.visit("/favorites ")}
                            className="hover:text-orange-500 cursor-pointer px-3 py-2"
                        >
                            Your Favorites
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer px-3 py-2">
                            Downloads
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer px-3 py-2 flex justify-between">
                            <span>Messages</span>
                            <span className="text-xs bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full">
                                102
                            </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="uppercase text-xs text-gray-400 mb-3 tracking-wide">
                        Others
                    </p>
                    <ul className="space-y-2">
                        <li className="hover:text-orange-500 cursor-pointer px-3 py-2">
                            Payments
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer px-3 py-2">
                            Analytics
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer px-3 py-2">
                            Your Profile
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer px-3 py-2">
                            Logout
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="p-4">
                <ProgressCard />
            </div>
        </aside>
    );
}

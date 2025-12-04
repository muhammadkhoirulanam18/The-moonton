import useTheme from "@/Hooks/useTheme";

export default function TopBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="flex items-center justify-between px-10 pt-6 pb-4">
            <div className="w-full max-w-xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search movie, cast, genre"
                        className="w-full rounded-2xl bg-white shadow-sm border border-gray-100 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4 ml-6">
                <button
                    onClick={toggleTheme}
                    className="px-3 py-2 text-sm rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>

                <span className="text-sm text-gray-500">Howdy,</span>
                <span className="font-semibold text-sm">Granola Sky</span>
                <button className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-400">
                    <img
                        src="/img/avatar.jpg"
                        alt="avatar"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </header>
    );
}

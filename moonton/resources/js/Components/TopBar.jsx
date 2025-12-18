export default function TopBar() {
    return (
        <header className="flex items-center justify-between px-4 md:px-10 pt-4 md:pt-6 pb-3 md:pb-4 gap-4">
            {/* SEARCH BAR */}
            <div className="w-full max-w-full md:max-w-xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search movie, cast, genre"
                        className="
                            w-full rounded-2xl bg-white dark:bg-gray-800 
                            shadow-sm border border-gray-200 dark:border-gray-700 
                            pl-11 pr-4 py-2.5 text-sm 
                            focus:outline-none focus:ring-2 focus:ring-orange-400/60
                        "
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </span>
                </div>
            </div>

            {/* USER INFO */}
            <div className="flex items-center gap-3 md:gap-4 shrink-0">
                {/* hide greeting text on mobile */}
                <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:gap-1">
                    <span className="text-xs md:text-sm text-gray-500">
                        Howdy,
                    </span>
                    <span className="font-semibold text-xs md:text-sm">
                        Granola Sky
                    </span>
                </div>

                <button className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-orange-400">
                    <img
                        src="/assets/images/avatar.png"
                        alt="avatar"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </header>
    );
}

export default function SidebarProgressCard() {
    const progress = 12; // hari
    const total = 30;
    const percent = (progress / total) * 100;

    return (
        <div className="bg-black text-white rounded-3xl p-4 flex flex-col gap-3 relative overflow-hidden">
            <div className="text-xs uppercase tracking-wide text-gray-400">
                For Greatest
            </div>
            <div className="text-2xl font-bold leading-tight">Premium Plan</div>
            <div className="text-xs text-gray-300">12 of 30 hari</div>

            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mt-1">
                <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${percent}%` }}
                />
            </div>

            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full border border-orange-400/40" />
        </div>
    );
}

import { useSidebar } from "@/Components/Context/SidebarContext";

export default function SidebarToggle() {
    const { toggleSidebar } = useSidebar();

    return (
        <button
            onClick={toggleSidebar}
            className="lg:hidden p-3 text-gray-700 dark:text-gray-300"
        >
            ☰
        </button>
    );
}

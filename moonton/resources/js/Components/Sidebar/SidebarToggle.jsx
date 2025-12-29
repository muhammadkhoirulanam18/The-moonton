import { useSidebar } from "@/Components/Context/SidebarContext.jsx";

export default function SidebarToggle() {
    const { toggleSidebar } = useSidebar();

    return (
        <button
            onClick={toggleSidebar}
            className="lg:hidden p-3 text-gray-600 dark:text-gray-300"
        >
            ☰
        </button>
    );
}

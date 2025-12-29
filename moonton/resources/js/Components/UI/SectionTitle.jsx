export default function SectionTitle({ children, right }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{children}</h2>
            {right && <div className="text-xs text-gray-400">{right}</div>}
        </div>
    );
}

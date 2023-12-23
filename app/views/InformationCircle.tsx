export const InformationCircle: React.FC<{className?: string}> = ({className=""}) => {
    return (
      <button className={`bg-gray-400 rounded-full h-4 w-4 flex items-center justify-center shadow-sm ${className}`}>
        <span className="text-gray-200 text-xs font-medium font-serif">i</span>
      </button>
    );
}
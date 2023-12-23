export const DollarCircle: React.FC<{className?: string}> = ({className=""}) => {
    return (
      <div className={`bg-green-600 rounded-full h-8 w-8 flex items-center justify-center shadow-md ${className}`}>
        <span className="text-gray-300 text-lg font-medium">$</span>
      </div>
    );
}
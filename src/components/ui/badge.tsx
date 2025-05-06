 
interface BadgeProps {
    color?: 'default' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';
    size?: 'small' | 'large';
    bordered?: boolean;
    pill?: boolean;
    label: React.ReactNode;
  }
  
  const colorClasses = {
    default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-400',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-500',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-400',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 border-indigo-400',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-400',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 border-pink-400',
  };
  
  const sizeClasses = {
    small: 'text-xs px-2.5 py-0.5',
    large: 'text-sm px-3 py-1',
  };
  
  export default function Badge({
    color = 'default',
    size = 'small',
    bordered = false,
    pill = false,
    label,
  }: BadgeProps) {
    const baseClasses = 'font-medium inline-flex items-center';
  
    const roundedClass = pill ? 'rounded-full' : 'rounded-sm';
  
    const borderClass = bordered ? `border ${colorClasses[color].split(' ').pop()}` : '';
  
    const classes = `${baseClasses} ${sizeClasses[size]} ${roundedClass} ${colorClasses[color]} ${borderClass}`;
  
    return <span className={classes}>{label}</span>;
  }
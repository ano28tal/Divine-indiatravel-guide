interface EmptyStateProps {
  message: string;
  colSpan?: number;
}

export const EmptyState = ({ message, colSpan = 2 }: EmptyStateProps) => {
  return (
    <div className={`col-span-${colSpan} text-center py-12`}>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

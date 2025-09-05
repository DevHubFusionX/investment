export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]',
    secondary: 'bg-[var(--surface)] hover:bg-[var(--surface-elevated)] text-[var(--text)] border border-[var(--border)] shadow-[var(--shadow-sm)]',
    outline: 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white bg-transparent'
  };
  
  return (
    <button
      className={`px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-xl)] font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
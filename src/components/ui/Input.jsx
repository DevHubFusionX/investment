export const Input = ({ label, icon: Icon, error, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-[var(--text)]">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted)]" />
        )}
        <input
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-[var(--border)] rounded-xl bg-[var(--bg)] text-[var(--text)] focus:border-[var(--primary)] focus:outline-none ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-[var(--error)]">{error}</p>
      )}
    </div>
  );
};
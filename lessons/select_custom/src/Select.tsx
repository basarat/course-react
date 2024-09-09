import { useId, useMemo } from 'react';

export type SelectProps = {
  label: string,
  value: string,
  onChange: (value: string) => void,
  options: { value: string, label: string }[],
};

export const Select = ({ label, value, onChange, options }: SelectProps) => {
  const id = useId();
  const ordered = useMemo(
    () => [...options].sort((a, b) => a.value === '' ? -1 : a.label.localeCompare(b.label)),
    [options]
  );
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={e => onChange(e.target.value)}>
        {ordered.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
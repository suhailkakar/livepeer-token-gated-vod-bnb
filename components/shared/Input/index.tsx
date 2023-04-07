import React from "react";

interface InputProps {
  placeholder: string;
  className?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
}

export default function Input({
  placeholder,
  onChange,
  className,
  value,
  readOnly,
}: InputProps) {
  return (
    <div>
      <input
        className={
          className +
          " bg-transparent p-4  border-zinc-800 border rounded-md text-zinc-400 text-sm font-light w-full  placeholder:text-zinc-700 focus:outline-none"
        }
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
}

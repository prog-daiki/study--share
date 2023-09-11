"use client"

import { cn } from "@/lib/utils";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>
  errors: FieldErrors;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  value,
  onChange
}) => {
  return (
    <>
      <div>
        <label htmlFor={id} className='block text-sm font-medium text-gray-900'>
          {label}
        </label>
        <div className='mt-2'>
          <input
            id={id}
            type={type}
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}
            onChange={onChange}
            value={value}
            className={cn(' block w-full rounded-md border-1 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600',
              errors[id] && 'focus;ring-rose-600',
              disabled && 'opacity-50 cursor-default',
            )}
          />
        </div>
      </div>
    </>
  )
}

export default Input

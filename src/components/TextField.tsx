import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

export default function TextField({ label, error, ...props }: TextFieldProps) {
    return (
        <div className="flex flex-col gap-1">

            {label && (
                <label className="text-sm text-zinc-600">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`
          h-11 px-4 rounded-lg bg-slate-50 border border-zinc-800
          text-zinc-900 placeholder-zinc-400
          focus:outline-none focus:ring-2 focus:ring-indigo-950
          ${error ? "border-red-500 focus:ring-red-500" : ""}
        `}
            />

            {error && (
                <span className="text-xs text-red-400">{error}</span>
            )}
        </div>
    );
}
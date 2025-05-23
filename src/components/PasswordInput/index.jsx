import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function PasswordInput({ id, form_text, title, showStrength = true, className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const checkPasswordStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[a-zA-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^a-zA-Z0-9]/.test(value)) score++;
    return score;
  };

  const strength = checkPasswordStrength(password);

  const getColor = () => {
    if (!password) return "";
    if (strength === 1) return "bg-red-500";
    if (strength === 2) return "bg-yellow-400";
    if (strength === 3) return "bg-yellow-500";
    if (strength === 4) return "bg-green-500";
  };

  const getLabel = () => {
    if (strength === 1) return "Very Weak";
    if (strength === 2) return "Weak";
    if (strength === 3) return "Medium";
    if (strength === 4) return "Strong";
  };

  return (
    <div className="input__wrapper">
      <label className="text-secondary-dark font-semibold" htmlFor={id}>
        {title}
      </label>

      <div className="flex flex-col gap-1">
        <div className="relative">
          <input
            id={id}
            type={showPassword ? "text" : "password"}
            className={clsx(
              "py-4 px-8 border border-[#d9d9d9] rounded placeholder:text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-600 transition duration-100",
              className
            )}
            {...(showStrength ? { onChange: (e) => setPassword(e.target.value) } : null)}
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} className="w-5 h-5" />
          </button>
        </div>

        {form_text && <span className="body-8 text-secondary-dark pl-1">{form_text}</span>}

        {password && (
          <div className="pl-1 pt-1 mt-4 w-[200px]">
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className={`h-full ${getColor()} rounded transition-all duration-300`}
                style={{ width: `${(strength / 4) * 100}%` }}
              />
            </div>
            <span className="text-xs mt-1 text-gray-500">{getLabel()}</span>
          </div>
        )}
      </div>
    </div>
  );
}

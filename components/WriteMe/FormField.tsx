import React from "react";

const FormField = ({
  label,
  isTextArea = false,
  type = "text",
  onChangeText,
  disabled,
  value,
}: {
  label: string;
  isTextArea?: boolean;
  type?: "text" | "email";
  onChangeText: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
  value: string;
}) => {
  const name = label.toLowerCase();

  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      {isTextArea ? (
        <div className="flex flex-col gap-2">
          <textarea
            className="w-full h-[100px] bg-[var(--levelOne)] p-2 outline-[var(--text)] active:outline-2 resize-none "
            name={name}
            onChange={(e) => onChangeText(e)}
            disabled={disabled}
            value={value}
          />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          className="w-full h-[50px] bg-[var(--levelOne)] px-2 outline-[var(--text)] active:outline-2 "
          onChange={(e) => onChangeText(e)}
          disabled={disabled}
          value={value}
        />
      )}
    </div>
  );
};

export default FormField;

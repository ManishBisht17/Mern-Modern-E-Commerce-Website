import React from "react";

interface GenderInputProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GenderInput: React.FC<GenderInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={value === "male"}
          onChange={onChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={value === "female"}
          onChange={onChange}
        />
        Female
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={value === "other"}
          onChange={onChange}
        />
        Other
      </label>
    </div>
  );
};

export default GenderInput;

"use client";

import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";

type InternationalPhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
  onBlur: () => void;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
};

export default function InternationalPhoneInput({
  value,
  onChange,
  onValidityChange,
  onBlur,
  ariaDescribedBy,
  ariaInvalid,
}: InternationalPhoneInputProps) {
  return (
    <IntlTelInput
      value={value}
      onChangeNumber={onChange}
      onChangeValidity={onValidityChange}
      loadUtils={() => import("intl-tel-input/utils")}
      strictMode
      strictRejectAnimation
      separateDialCode
      countrySearch
      countrySelectorMode="AUTO"
      containerClass="mt-2 w-full"
      searchInputClass="rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
      inputProps={{
        id: "phone-visible",
        autoComplete: "tel",
        inputMode: "tel",
        placeholder: "Select a country and enter your number",
        onBlur,
        "aria-describedby": ariaDescribedBy,
        "aria-invalid": ariaInvalid || undefined,
        className:
          "min-h-12 w-full rounded-xl border border-zinc-300 bg-white py-3 pr-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-100",
      }}
    />
  );
}
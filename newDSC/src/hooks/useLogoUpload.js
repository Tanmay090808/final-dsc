import { useEffect, useState } from "react";

export default function useLogoUpload(initialLogo) {
  const [logo, setLogo] = useState(initialLogo);

  useEffect(() => () => {
    if (logo.startsWith("blob:")) URL.revokeObjectURL(logo);
  }, [logo]);

  const handleLogoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLogo(URL.createObjectURL(file));
  };

  return { logo, handleLogoChange };
}
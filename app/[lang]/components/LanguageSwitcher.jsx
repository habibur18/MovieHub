"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHzOkCSSKf-eLGpqUkoHnsDvPYZ_b79U_6w&s",
    },
    {
      code: "bn",
      language: "Bangla",
      src: "https://flagdownload.com/wp-content/uploads/Flag_of_Bangladesh_Flat_Round.png",
    },
  ];
  // Find current selected language from URL
  const found = languages.find((lang) => pathname.startsWith(`/${lang.code}`));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    // Remove the current language code from the pathname and replace it with the new language code
    const newPath = pathname.replace(`/${selectedLanguage.code}`, `/${lang}`);

    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowMenu(false);
    // router.push(newPath); // Redirect to the new language path
    window.location.href = newPath;
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            className="max-w-8 rounded-full"
            src={selectedLanguage.src}
            alt="bangla"
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showMenu && (
          <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-green-950 p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <Image
                  className="max-w-8"
                  src={entry.src}
                  alt="bangla"
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

'use client';

import { FileUpload } from "@/components/file-upload";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "@/components/theme-provider";

export function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="container mx-auto py-10 px-4 md:px-6 flex flex-col gap-6 max-w-xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Vision</h1>
        <ThemeSwitcher 
          value={theme} 
          onChange={setTheme}
        />
      </div>

      <div className="max-w-xl mx-auto">
        <FileUpload
          maxFiles={5}
          maxSize={10 * 1024 * 1024} // 10MB
          accept={{
            "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
            "application/pdf": [".pdf"],
            "application/msword": [".doc", ".docx"],
            "text/plain": [".txt"],
          }}
        />
      </div>
    </main>
  );
}

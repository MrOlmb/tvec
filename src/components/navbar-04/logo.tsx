import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center group cursor-pointer h-12 md:h-[40px]">
    <Image
      src="/logo.png"
      alt="TVEC Logo"
      width={180}
      height={40}
      quality={100}
      className="h-full w-auto transition-all duration-300 group-hover:opacity-90 object-contain"
      priority
      unoptimized={false}
    />
  </div>
);

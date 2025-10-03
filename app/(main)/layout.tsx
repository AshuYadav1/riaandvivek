import type React from "react";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* ✅ Responsive Ornate Background
        Removed overflow-y-scroll and h-full from this div
        to make it truly fixed.
      */}
      <div
        className="
          fixed inset-0 z-0
          bg-repeat-y bg-cover
          w-full h-full
          bg-[url('/mobile-bng.jpg')]
          md:bg-[url('/bg.jpg')]
          md:bg-repeat-y md:bg-[length:100%_auto]
        "
      />

      {/* <Navigation /> */}

      {/* ✅ Main Content
        Added h-full and overflow-y-scroll to the parent div
        to enable scrolling for the content.
      */}
      <main
        className="
          relative z-10 
          flex justify-center
          md:px-[6%]
          h-full overflow-y-scroll
        "
      >
        <div className="w-full max-w-[100%]">{children}</div>
      </main>
    </>
  );
}

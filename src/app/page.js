import ThemeToggle from "@/components/common/ThemeToggle";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <ThemeToggle />
    </main>
  );
}
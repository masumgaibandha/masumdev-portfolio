import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            404 Error
          </div>

          <h1 className="text-7xl font-bold text-cyan-400 md:text-8xl">404</h1>

          <h2 className="mt-6 text-4xl font-bold">Page Not Found</h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[var(--muted)]">
            The page you are looking for doesn't exist, may have been moved, or
            the URL might be incorrect.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
            >
              Back to Home
            </Link>

            <Link
              href="/projects"
              className="rounded-xl border border-[var(--border)] px-8 py-4 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

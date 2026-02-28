export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      
      {/* Background Gradient Blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600 opacity-30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="text-4xl font-extrabold sm:text-6xl">
          The Future of Web Development
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Design, build, and scale your apps with performance and elegance using Next.js and Tailwind CSS.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#"
            className="rounded-md bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </a>

          <a
            href="#"
            className="rounded-md border border-white px-6 py-3 font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  )
}
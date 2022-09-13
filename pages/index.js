import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-full bg-black">
      <Head>
        <title>mkubdev.biz | Maxime Kubik Software Engineer</title>
        <meta name="description" content="Maxime Kubik Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="text-white ">
          <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-slate-300 via-purple-500 to-pink-600">
                mkubdev.biz
                <span className="sm:block"></span>
              </h1>

              <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                I&apos;m Maxime. Software Engineer @tftlabs | @0xPolygon 🥑 -
                Building /w Angular/Next.js everyday - Learning Solidity, XR 🧪
                @WebXDAO
              </p>

              <div className="flex flex-wrap justify-center mt-8 gap-4">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-gradient-to-r from-slate-300 via-purple-500 to-pink-600 border border-pink-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                  href="https://github.com/mkubdev"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import {Link} from "react-router-dom"

function Hero() {
  return (
    <section className="px-5 lg:px-10 pt-8">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center min-h-[85vh]">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#6b6b6b]">
            Curated essentials
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mt-6">
            Minimal shopping
            <br />
            for modern living.
          </h1>

          <p className="text-[#6b6b6b] text-lg mt-8 max-w-xl leading-8">
            Carefully selected products with timeless aesthetics,
            clean functionality, and effortless everyday utility.
          </p>

          <div className="flex gap-4 mt-10">

            <Link to="/products">
              <button className="bg-[#1f1f1f] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
                Shop Collection
              </button>
            </Link>

            <button className="border border-[#d8d3cc] px-8 py-4 rounded-full hover:bg-[#ebe7e0] transition">
              Explore
            </button>
          </div>
        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400"
            className="rounded-[40px] h-[700px] w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-[#faf8f5]/90 backdrop-blur-md p-6 rounded-3xl max-w-sm">

            <p className="text-sm text-[#6b6b6b]">
              Featured Collection
            </p>

            <h3 className="text-2xl font-semibold mt-2">
              Everyday essentials with elevated design.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
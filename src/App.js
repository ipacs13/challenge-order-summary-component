import "./App.css";
import img from "./assets/images/illustration-hero.svg";
import note from "./assets/images/icon-music.svg";

function App() {
  return (
    <div className="App bg-pattern-background-desktop bg-no-repeat bg-contain bg-top font-RedHatDisplay">
      <div className="flex h-screen justify-center items-center">
        <div className="max-w-md sm:min-x-md max-h-custom-height bg-white shadow-xl rounded-lg overflow-hidden flex-none">
          <picture>
            <img src={img} alt="bg-music" />
          </picture>
          <section className="mt-1 p-8 grid justify-items-center">
            <h1 className="text-2xl mb-5 font-black">
              {/* <strong>Order Summary</strong> */}
              Order Summary
            </h1>
            <p className="w-3/4 text-slate">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <figure className="rounded-md w-full bg-v-pale-blue mt-10 p-4 flex flex-row items-center">
              <img src={note} alt="note" className="rounded-full border-none flex-none" />
              <div id="pricing" className="ml-6 flex-none text-start">
                <p>
                  <strong className="font-semibold text-dark-blue">Annual Plan</strong>
                </p>
                <p className="text-sm">$59.99/year</p>
              </div>
              <div id="action" className="flex-none ml-auto">
                <a href="https://" className="text-blue-800 hover:text-blue-500 underline underline-offset-4 decoration-solid">
                  Change Plan
                </a>
              </div>
            </figure>
            <button className="mt-8 w-full rounded-lg bg-blue-700 py-4 px-4 text-white text-sm hover:bg-blue-500">Proceed to Payment</button>
            <p className="mt-5 text-slate-500 font-[800]">
              <a href="https://"> Cancel Order</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

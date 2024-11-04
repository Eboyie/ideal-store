import img from '../assets/image/bg-img1.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className="align-element grid md:grid-cols-2 items-center pt-3 lg:pt-0  ">
        <div>
          <div className="flex flex-col gap-4 items-center justify-center px-4">
            <h2 className="text-4xl font-bold lg:tracking-widest">
              A Taste for Everyone
            </h2>
            <p className="text-2xl">
              {' '}
              <i>
                <span className="font-semibold text-red-500 bg-slate-200 px-2 py-1 rounded">
                  Do not be left out!
                </span>{' '}
              </i>
              Take a peek at our collection of products
            </p>
            <Link to="/collection">
              <button className="border font-semibold px-2 py-1 rounded items-center  hover:bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300">
                Take Me There
              </button>
            </Link>
          </div>
          <ul className="hidden md:flex flex-col gap-2 mt-3 pl-8 text-xl">
            <li>✅beauty</li>
            <li>✅men</li>
            <li>✅women</li>
            <li>✅children</li>
            <li>✅home</li>
            <li>✅accessories</li>
          </ul>
          <ul className="md:hidden flex flex-wrap justify-center gap-2 my-5 pl-8 text-md">
            <li>✅beauty</li>
            <li>✅men</li>
            <li>✅women</li>
            <li>✅children</li>
            <li>✅home</li>
            <li>✅accessories</li>
          </ul>
        </div>
        <div className="w-full object-cover">
          <p>
            <img src={img} alt="front image" className="h-full" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen w-screen">
      <img
        src="/clouds.png"
        alt="clouds"
        className="inset-0 object-cover h-full w-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="text-left bg-blue-900/20 backdrop-blur-lg border border-white/30 rounded-lg p-8 mx-4">
          <h2 className="text-xl font-extrabold text-white mb-6">About</h2>
          <p className="text-white/90 mb-4 leading-relaxed">
            Our mission is to nurture cutting-edge applications for
            decentralized web software protocols.
          </p>
          <p className="text-white/90 mb-6 leading-relaxed">
            Our passion is delivering Web 3.0, a decentralized and fair internet
            where users control their own data, identity and destiny.
          </p>
          <h3 className="text-xl font-extrabold text-white mb-4">
            Web3 Foundation believes in an internet where:
          </h3>
          <ul className="text-white/90 space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              Users own their own data, not corporations
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              Global digital transactions are secure
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              Online exchanges of information and value are decentralized
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

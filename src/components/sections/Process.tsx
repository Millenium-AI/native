export const Process = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-light text-native-green mb-4 text-center">Our Simple Process</h2>
        <p className="text-base sm:text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
          Getting insured doesn't have to be complicated. We handle the details so you don't have to.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-native-green text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-sm sm:text-xl font-semibold text-native-gray mb-2">Contact Us</h3>
            <p className="text-native-gray-secondary text-xs sm:text-sm">Call, email, or fill out our quick quote form</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-native-green text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-sm sm:text-xl font-semibold text-native-gray mb-2">We Analyze</h3>
            <p className="text-native-gray-secondary text-xs sm:text-sm">Our experts review your situation and needs</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-native-green text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-sm sm:text-xl font-semibold text-native-gray mb-2">Compare Options</h3>
            <p className="text-native-gray-secondary text-xs sm:text-sm">We shop multiple carriers for best value</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-native-green text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-sm sm:text-xl font-semibold text-native-gray mb-2">Get Covered</h3>
            <p className="text-native-gray-secondary text-xs sm:text-sm">Finalize policy and enjoy peace of mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center bg-purple-600">
      <div className="flex-1 max-w-full mx-auto p-8 sm:p-16">
        <div className="grid grid-cols-1 gap-4 grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
          <div className="col-span-full bg-yellow-200 rounded-lg shadow-xl lg:col-span-1 lg:row-span-2">
            <div className="h-24 text-center">Navigation</div>
          </div>
          <div className="bg-white rounded-lg shadow-xl lg:col-start-2 lg:col-span-2 xl:col-span-3">
            <div className="h-24 text-center">Content</div>
          </div>
          <div className="bg-white rounded-lg shadow-xl lg:col-start-2 lg:col-span-2 xl:col-span-3">
            <div className="h-24 text-center">Content</div>
          </div>
          <div className="bg-green-300 rounded-lg shadow-xl lg:col-start-2 lg:col-span-2 xl:col-start-5 xl:col-span-1">
            <div className="h-24 text-center">Additional content</div>
          </div>
          <div className="bg-green-300 rounded-lg shadow-xl lg:col-start-2 lg:col-span-2 xl:col-start-5 xl:col-span-1">
            <div className="h-24 text-center">Additional content</div>
          </div>
          <div className="bg-red-300 h-8 text-center rounded-lg shadow-xl lg:col-start-2 xl:col-start-5 2xl:col-start-6">
            Social Media1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-3xl font-semibold text-red-500 mb-4">Recipe Not Found 🙁</h2>
          <p className="text-gray-600">We couldn't find the recipe you're looking for.</p>
          <p className="text-gray-600">Please try a different search or check the spelling.</p>
        </div>
      );
};

export default PageNotFound;

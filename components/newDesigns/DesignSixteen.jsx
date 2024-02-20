import React from 'react';

const DesignSixteen = () => {
  // Example categories with placeholder images
  const categories = [
    { name: 'Category 1', imageUrl: 'https://img.freepik.com/free-photo/exterior-outdoors-garden-chair-gardens_1203-4805.jpg?size=626&ext=jpg' },
    { name: 'Category 2', imageUrl: 'https://img.freepik.com/premium-photo/interior-design-beautiful-modern-bedroom-daytime_146671-53728.jpg?size=626&ext=jpg' },
    { name: 'Category 3', imageUrl: 'https://img.freepik.com/free-photo/close-up-mottled-soft-sofa-texture-with-sunken-buttons-idea-variant-fabric-upholstery-sofa_169016-10502.jpg?size=626&ext=jpg&ga=GA1.1.1024511004.1708432645&semt=ais' },
    { name: 'Category 4', imageUrl: 'https://img.freepik.com/premium-photo/sofa-with-blue-plaid-interior-window_8353-2861.jpg?size=626&ext=jpg&ga=GA1.1.1024511004.1708432645&semt=ais' },
    { name: 'Category 5', imageUrl: 'https://img.freepik.com/free-photo/decoration-with-sweater-ice-skates-hanger_23-2148350148.jpg?size=626&ext=jpg&ga=GA1.1.1024511004.1708432645&semt=ais' },
    { name: 'Category 6', imageUrl: 'https://img.freepik.com/free-photo/home-luxury-wall-beautiful-sofa_1203-4404.jpg?size=626&ext=jpg&ga=GA1.1.1024511004.1708432645&semt=ais' },
    { name: 'Category 7', imageUrl: 'https://img.freepik.com/free-photo/decorated-interior-empty-home_1303-18301.jpg?size=626&ext=jpg&ga=GA1.1.1024511004.1708432645&semt=ais' },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-5">
      <div className="text-left text-pretty text-xl font-[700]">
        <h2 className="text-xl font-bold my-4">Top Category</h2>
        <hr />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mt-5">
        {categories.map((category, index) => (
          <div key={index} className="category-card transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img src={category.imageUrl} alt={category.name} className="w-full h-40 object-cover rounded-t-md" />
            <div className="p-4 bg-white">
              <h3 className="text-md font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSixteen;

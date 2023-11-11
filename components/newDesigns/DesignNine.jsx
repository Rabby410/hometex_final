import React from "react";

const DesignNine = () => {
  // Define data for each section
  const sections = [
    {
      id: 1,
      imageUrl:
        "https://imgmedia.lbb.in/media/2022/05/62736afa42d07e2c4a83ea34_1651731194487.jpg",
      title: "Furniture",
      listItems: ["Kitchen", "Beadroom", "Bathroom", "Decor"],
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPkG8YniwduPdxt-1rlccXUQ4BDDvbYi7nDlWCCP_5h0BvKo1C_VTEPHE3Q-7xX5Jxhc&usqp=CAU",
      title: "Mobile Phone",
      listItems: ["Smartphones", "Cell Phones", "Brand Phones", "Accessories"],
    },
    {
      id: 3,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBNEthEO4U_HsaDdyouvTlb4VAcEXL8p5OH7YNWhssk-U2ZKKOPYLed08z-M888I0P5k&usqp=CAU",
      title: "Fashion",
      listItems: ["Men's", "Women's", "Glasses", "Accessories"],
    },
    {
      id: 4,
      imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2021/09/10080.jpg?quality=75&strip=all",
      title: "Bag & shoes",
      listItems: ["Men's Bags", "Women's Bags", "Men's shoes", "Women's shoes"],
    },
    {
      id: 5,
      imageUrl: "https://khazana.com.bd/wp-content/uploads/2021/08/3-6-10-12-Slot-Pu-Leather-Watch-Box-Protable-Travel-Watch-Case-Storage-Vintage-Wood-1.jpg",
      title: "Watches & Bags",
      listItems: ["Men's Watches", "Women's Jewelary", "Men's Watches", "Women's Jewelary"],
    },
    {
      id: 6,
      imageUrl: "https://media.istockphoto.com/id/949190736/photo/various-sport-equipments-on-grass.jpg?s=612x612&w=0&k=20&c=e5XgszJQciKRrqQECO9RPqLh7w1kkhNBFetf4742BF0=",
      title: "OutDoor & Sports",
      listItems: ["Knives & Tools", "Exercise", "Cycaling & Rowing", "Camping & Hiking"],
    },
    {
      id: 7,
      imageUrl: "https://i.ebayimg.com/images/g/q2wAAOSwy4Jk0g-B/s-l1600.jpg",
      title: "Gaming",
      listItems: ["PC Games", "PC Components", "Gaming Acc.", "Gaming Chairs"],
    },
    {
      id: 8,
      imageUrl: "https://softsensbaby.com/cdn/shop/files/Website_Banner_Kit.jpg?v=1669009361",
      title: "Baby Kids",
      listItems: ["Baby Care", "Baby Gear", "Kids Clothing", "Feeding"],
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Map over sections array */}
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white p-2 relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <div className="flex">
              <img
                src={section.imageUrl}
                alt={`Left Image ${section.id}`}
                className="w-1/2 h-auto object-cover"
              />
              <div className="w-1/2 ml-4">
                <h2 className="text-lg font-bold mb-2 overflow-ellipsis">{section.title}</h2>
                <ul>
                  {section.listItems.map((item, index) => (
                    <li key={index} className="overflow-ellipsis whitespace-nowrap">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Popup Box */}
            <div className="hidden absolute top-0 left-0 right-0 bottom-0 bg-white p-4 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-lg font-bold mb-2">{section.title}</h2>
              <ul>
                {section.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DesignNine;

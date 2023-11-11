import React from "react";

const DesignTen = () => {
  // Define data for each section
  const sectionsRow1 = [
    {
      id: 1,
      imageUrl: "https://m.media-amazon.com/images/I/718MqLP+uAS.jpg",
      title: "Smart VR BOX",
      text: "Lorem Contrary to popular belif",
      button: "Shop Now",
    },
    {
      id: 2,
      imageUrl:
        "https://media.istockphoto.com/id/492366892/photo/checkered-napkin-at-right-side-of-wooden-background.jpg?s=612x612&w=0&k=20&c=15_KX_6YKwAMuRaZCBtfhM_F3XN6VW8Y8D6jZROlPaY=",
      title: "Smart Watch",
      text: "Lorem Contrary to popular belif",
      button: "Shop Now",
    },
  ];

  const sectionsRow2 = [
    {
      id: 3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBNEthEO4U_HsaDdyouvTlb4VAcEXL8p5OH7YNWhssk-U2ZKKOPYLed08z-M888I0P5k&usqp=CAU",
      title: "Section 3",
      listItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      id: 4,
      imageUrl:
        "https://nypost.com/wp-content/uploads/sites/2/2021/09/10080.jpg?quality=75&strip=all",
      title: "Section 4",
      listItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      id: 5,
      imageUrl:
        "https://nypost.com/wp-content/uploads/sites/2/2021/09/10080.jpg?quality=75&strip=all",
      title: "Section 5",
      listItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* First Row - 2 Grid Views */}
        {sectionsRow1.map((section) => (
          <div
            key={section.id}
            style={{ backgroundImage: `url(${section.imageUrl})` }}
            className="bg-cover bg-center text-white p-24 relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
              <p>{section.text}</p>
              <p className="text-2xl font-bold text-red-600 underline decoration-sky-500">{section.button}</p>
            </div>
            {/* Popup Box */}
            <div className="hidden absolute top-0 left-0 right-0 bottom-0 bg-white p-4 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
              <p>{section.text}</p>
              <p className="text-2xl font-bold text-red-600 underline decoration-sky-500">{section.button}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-3 mb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Second Row - 3 Grid Views */}
        {sectionsRow2.map((section) => (
          <div
            key={section.id}
            className="bg-white p-2 relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                <ul>
                  {section.listItems.map((item, index) => (
                    <li
                      key={index}
                      className="overflow-ellipsis whitespace-nowrap"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={section.imageUrl}
                alt={`Left Image ${section.id}`}
                className="w-1/2 h-auto object-cover"
              />
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

export default DesignTen;

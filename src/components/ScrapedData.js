// import { useState } from "react";
// import "../styles/ScrapedData.scss"

// const dummyData = [
//   { id: 1, url: "https://example.com/home", status: "Scraped", data: ["Welcome text", "Footer info"] },
//   { id: 2, url: "https://example.com/about", status: "Pending", data: [] },
//   { id: 3, url: "https://example.com/contact", status: "Scraped", data: ["Contact form details", "Email address"] },
//   { id: 4, url: "https://example.com/services", status: "Scraped", data: ["Service list", "Pricing information"] },
//   { id: 5, url: "https://example.com/blog", status: "Pending", data: [] },
//   { id: 6, url: "https://example.com/privacy", status: "Scraped", data: ["Privacy policy details", "Terms and conditions"] },
//   { id: 7, url: "https://example.com/terms", status: "Scraped", data: ["Terms of use", "Liability information"] },
//   { id: 8, url: "https://example.com/careers", status: "Pending", data: [] },
//   { id: 9, url: "https://example.com/testimonials", status: "Scraped", data: ["Customer testimonials", "Success stories"] },
//   { id: 10, url: "https://example.com/faq", status: "Scraped", data: ["Frequently asked questions", "Support information"] },
//   { id: 11, url: "https://example.com/resources", status: "Pending", data: [] },
//   { id: 12, url: "https://example.com/team", status: "Scraped", data: ["Team member bios", "Company history"] },
// ];


// export default function WebpageScraperUI() {
//   const [selectedPage, setSelectedPage] = useState(null);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Scraped Webpages</h2>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {dummyData.map((page) => (
//           <div
//             key={page.id}
//             className="p-4 cursor-pointer hover:shadow-lg border rounded-lg"
//             onClick={() => setSelectedPage(page)}
//           >
//             <p className="text-lg font-semibold">{page.url}</p>
//             <p className={`mt-2 ${page.status === "Scraped" ? "text-green-500" : "text-yellow-500"}`}>
//               {page.status}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal for displaying scraped data */}
//       {selectedPage && (
//         <div
//           className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
//           onClick={() => setSelectedPage(null)}
//         >
//           <div
//             className="bg-white p-6 rounded-lg max-w-lg w-full"
//             onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
//           >
//             <div>
//               <h3 className="text-xl font-bold mb-4 mt-0">{selectedPage?.url}</h3>
//               <div>
//                 {selectedPage?.data.length > 0 ? (
//                   <ul className="list-disc pl-4">
//                     {selectedPage.data.map((chunk, index) => (
//                       <li key={index} className="mb-2">{chunk}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-500">No data scraped yet.</p>
//                 )}
//               </div>
//               <div className="mt-4 text-right">
//                 <button
//                   onClick={() => setSelectedPage(null)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import "../styles/ScrapedData.scss";

let dummyData = [
  { id: 1, url: "https://example.com/home", status: "Scraped", data: ["Welcome text", "Footer info"] },
  { id: 2, url: "https://example.com/about", status: "Pending", data: [] },
  { id: 3, url: "https://example.com/contact", status: "Scraped", data: ["Contact form details", "Email address"] },
  { id: 4, url: "https://example.com/services", status: "Scraped", data: ["Service list", "Pricing information"] },
  { id: 5, url: "https://example.com/blog", status: "Pending", data: [] },
  { id: 6, url: "https://example.com/privacy", status: "Scraped", data: ["Privacy policy details", "Terms and conditions"] },
  { id: 7, url: "https://example.com/terms", status: "Scraped", data: ["Terms of use", "Liability information"] },
  { id: 8, url: "https://example.com/careers", status: "Pending", data: [] },
  { id: 9, url: "https://example.com/testimonials", status: "Scraped", data: ["Customer testimonials", "Success stories"] },
  { id: 10, url: "https://example.com/faq", status: "Scraped", data: ["Frequently asked questions", "Support information"] },
  { id: 11, url: "https://example.com/resources", status: "Pending", data: [] },
  { id: 12, url: "https://example.com/team", status: "Scraped", data: ["Team member bios", "Company history"] },
];

export default function WebpageScraperUI() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [scrapingProgress, setScrapingProgress] = useState(0);
  const [isScrapingComplete, setIsScrapingComplete] = useState(false);

  useEffect(() => {
    const totalPending = dummyData.filter(page => page.status === "Pending").length;
    const completedScraping = dummyData.filter(page => page.status === "Scraped").length;
    const totalPages = completedScraping + totalPending;

    setScrapingProgress((completedScraping / totalPages) * 100);

    if (totalPending > 0) {
      let interval = setInterval(() => {
        const pendingPages = dummyData.filter(page => page.status === "Pending");

        if (pendingPages.length > 0) {
          const updatedData = dummyData.map(page => {
            if (page.status === "Pending") {
              return { ...page, status: "Scraped", data: [`Scraped data for ${page.url}`] };
            }
            return page;
          });

          dummyData = updatedData;

          const newCompletedScraping = updatedData.filter(page => page.status === "Scraped").length;
          const newProgress = (newCompletedScraping / totalPages) * 100;

          setScrapingProgress(newProgress);

          if (newProgress === 100) {
            clearInterval(interval);
            setIsScrapingComplete(true);
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsScrapingComplete(true);
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Scraped Webpages</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyData.map((page) => (
          <div
            key={page.id}
            className="p-4 cursor-pointer hover:shadow-lg border rounded-lg"
            onClick={() => setSelectedPage(page)}
          >
            <p className="text-lg font-semibold">{page.url}</p>
            <p className={`mt-2 ${page.status === "Scraped" ? "text-green-500" : "text-yellow-500"}`}>
              {page.status}
            </p>
          </div>
        ))}
      </div>

      {selectedPage && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedPage(null)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">{selectedPage.url}</h3>
            <div>
              {selectedPage.data.length > 0 ? (
                <ul className="list-disc pl-4">
                  {selectedPage.data.map((chunk, index) => (
                    <li key={index} className="mb-2">{chunk}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No data scraped yet.</p>
              )}
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedPage(null)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Bar */}
      <div className="progress-container">
        <p className="text-lg font-semibold">Scraping Progress</p>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${scrapingProgress}%` }}
          ></div>
        </div>
        <p className="progress-text">{Math.round(scrapingProgress)}%</p>

        {isScrapingComplete && (
          <button className="continue-button show" onClick={() => alert("Proceeding to the next step!")}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

import React from "react";
import Card from "./components/Card";

function App(){

let cardContent = [
  {
    content: "Complete the Project & Deploy it on Vercel, Once everything gets done share the project link to the instructor",
    containerClassName: "bg-pink-600 h-40 w-50 p-[10px] rounded-md hover:bg-pink-700 text-gray-400 hover:text-white",
    contentClassName: "text-[10px]"
  },
  {
    content: "Complete the Project & Deploy it on Vercel, Once everything gets done share the project link to the instructor",
    containerClassName: "bg-green-600 h-40 w-50 p-[10px] rounded-md hover:bg-green-700 text-gray-400 hover:text-white",
    contentClassName: "text-[15px]"
  },
  {
    content: "Complete the Project & Deploy it on Vercel, Once everything gets done share the project link to the instructor",
    containerClassName: "bg-red-600 h-40 w-50 p-[10px] rounded-md hover:bg-red-700 text-gray-400 hover:text-white",
    contentClassName: "text-[10px]"
  },
]


  return(
    <>
      <div className="w-full h-screen bg-zinc-800 p-[2rem] flex  justify-center gap-[1rem] relative">
          {
            cardContent.map((cardVal)=>{
              console.log(cardVal);
              return (
                <Card 
                  key={cardVal.content}
                  content={cardVal.content}
                  containerClassName={cardVal.containerClassName}
                  contentClassName={cardVal.contentClassName}
                />
              )
            })
          }
      </div>
    </>
  )
}
export default App
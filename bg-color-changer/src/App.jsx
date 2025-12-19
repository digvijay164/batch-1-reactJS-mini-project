// import React, { useState } from "react"
// import Button from "./Button"

// function App() {

//   let [color, setColor] = useState("black")
//   let colorSet = ["red", "green", "blue", "pink", "yellow", "orange"]

//   return (
//     <>
//       <div
//         className="main h-screen w-full flex items-center justify-center"
//         style={{ backgroundColor: color }}>
//         <div className="container w-full bg-white rounded-full h-20 flex items-center justify-center gap-10 ">
//           {
//             colorSet.map(
//               (eachColor) => {
//                 console.log(eachColor);
//                 return (
//                   <Button
//                     key={eachColor}
//                     btnName={eachColor}
//                     className="w-22 h-10 rounded-full border-1"
//                     btnColor={eachColor}
//                     onclick={() => { setColor(color = eachColor) }}
//                   />
//                 )
//               }
//             )
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// export default App



























import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState('black')
  let colorSets = [
    "red",
    "blue",
    "purple",
  ]

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: color }}>
        <div className="button-container h-[10%] w-[80%] bg-white flex items-center justify-center rounded-full gap-[15rem] ">
          {
            colorSets.map((colorVal) => {
              console.log(colorVal);
              return (
                <Button
                  key={colorVal}
                  bgColorName={colorVal}
                  bgColorUpdate={() => { setColor(colorVal) }}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
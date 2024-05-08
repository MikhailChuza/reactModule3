import LoginForm from "./LoginForm/LoginForm.jsx";
// import LangSwitcher from "./LangSwitcher/LangSwitcher.jsx";
import { useState } from "react";
import "./App.css";

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = (userData) => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };

// export default function App() {
//   const [lang, setLang] = useState("uk");

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// }

// export default function App() {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <div className="options">
//         <label>
//           <input
//             type="radio"
//             name="coffeeSize"
//             value="sm"
//             checked={coffeeSize === "sm"}
//             onChange={handleSizeChange}
//           />
//           Small
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="coffeeSize"
//             value="md"
//             checked={coffeeSize === "md"}
//             onChange={handleSizeChange}
//           />
//           Meduim
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="coffeeSize"
//             value="lg"
//             checked={coffeeSize === "lg"}
//             onChange={handleSizeChange}
//           />
//           Large
//         </label>
//       </div>
//       <p>
//         <b>Selected size:</b> {coffeeSize}
//       </p>
//     </>
//   );
// }
const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default App;

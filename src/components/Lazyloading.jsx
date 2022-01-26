import React from "react";

//STEP 1:
//create components using React.lazy
const FirstColor = React.lazy(() => import("./components/themes/FirstColor"));
const SecondColor = React.lazy(() => import("./components/themes/SecondColor"));
const ThirdColor = React.lazy(() => import("./components/themes/ThirdColor"));
const FourthColor = React.lazy(() => import("./components/themes/FourthColor"));
const FifthColor = React.lazy(() => import("./components/themes/FifthColor"));
const DarkMode = React.lazy(() => import("./components/themes/Dark"));
const LightMode = React.lazy(() => import("./components/themes/Light"));

//STEP 2:
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children, color, mode }) => {
  console.log(mode);
  console.log(color);
  return (
    <>
      <React.Suspense fallback={<></>}>
        {color === "color-1" && <FirstColor />}
        {color === "color-2" && <SecondColor />}
        {color === "color-3" && <ThirdColor />}
        {color === "color-4" && <FourthColor />}
        {color === "color-5" && <FifthColor />}
      </React.Suspense>
      {children}
    </>
  );
};

const Lazyloading = () => {
  return (
    <ThemeSelector color={selectColor} mode={selectLight}>
      <div></div>
    </ThemeSelector>
  );
};

export default Lazyloading;

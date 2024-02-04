
import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

// replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature
const [appClass, appClassSetter] = useState(false)
function clickFn () {
appClassSetter((appClass) => !appClass)
return;
}
return (
<div className={appClass ? "App dark" : "App light"}>
<header>
<h2>Shopster</h2>
<button 
onClick={clickFn}>{appClass ? "Dark Mode" : "Light Mode"}
</button>
</header>
<ShoppingList items={itemData} />
</div>
);
}

export default App;
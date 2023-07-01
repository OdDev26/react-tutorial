import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";
import UsingProps from "./components/PassingDataViaProps";
import PassingFunctionsViaProps from "./components/PassingFunctionsViaProps";
import PassingChildren from "./components/PassingChildren";
import Button from "./components/Button/Button";
import Exercise1 from "./components/Exercise1";
import Alert from "./components/Alert";
import ListGroup2 from "./components/ListGroup/ListGroup2";
import Exercise2 from "./components/Exercise2";
import UpdatingState from "./components/UpdatingObjectState";
import UpdatingObjectState from "./components/UpdatingObjectState";
import UpdatingNestedObjectsState from "./components/UpdatingNestedObjectsState";
import UpdatingArrayState from "./components/UpdatingArrayState";
import produce from "immer";
import SimplifyingArrayStateUpdateLogicWithImmer from "./components/SimplifyingArrayStateUpdateLogicWithImmer";
import Exercise6 from "./components/Exercise6";
import Form from "./components/Form";
import TrackingFormInput from "./components/TrackingFormInpuUsingTheRefHookt";
import TrackingFormInpuUsingTheRefHook from "./components/TrackingFormInpuUsingTheRefHookt";
import TrackingFormInputUsingTheStateHook from "./components/TrackingFormInputUsingTheStateHook";
import BuildingFormsUsingReactHookForm from "./components/BuildingFormsUsingReactHookForm";
import UsingZodToHandleFormValidation from "./components/UsingZodToHandleFormValidation";
import ExpenseList from "./expense-tracker-exercise/component/ExpenseList";
import ExpenseFilter from "./expense-tracker-exercise/ExpenseFilter";
import ExpenseForm from "./expense-tracker-exercise/component/ExpenseForm";

// Adding "as const" in line 30 ensures the array is read only
export const categories = ["Groceries", "Utilities", "Entertainment"] as const;
function App() {
  /** Passing data and function via props
  const items = ["Milk", "Bread", "Cake"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <PassingFunctionsViaProps
      items={items}
      heading="Hello"
      onSelectItem={handleSelectItem}
    />
  );
}**/
  /**Passing children as a string
  return <PassingChildren>Hello </PassingChildren>;
  Passing children as html
  return (
    <PassingChildren>
      Hello <span>World</span>
    </PassingChildren>
  );**/
  /** Exercise 1
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };
  const handleButtonClick = () => {
    setShowAlert(false);
  }; 
  return (
    <>
      {showAlert && <Alert onButtonClick={handleButtonClick} />}
      <Exercise1 onClick={handleClick}>My button</Exercise1>
    </>
  );**/
  /** Using styled components 
  return (
    <>
      <Button>Hello</Button>
    </>
  );*/
  /** Using immer library to simplify updating array state 
  return (
    <>
      <SimplifyingArrayStateUpdateLogicWithImmer />
    </>
  );*/
  /** Exercise 3 
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Mike",
    },
  });

  const [newGame, setNewGame] = useState({
    ...game,
    // doing the below ensures we create a new player object in memory and that it
    // contains all the player properties in the previous object
    player: { ...game.player, name: "John" },
  });

  return (
    <>
      <h1>{game.player.name}</h1>
      <button onClick={() => setGame(newGame)}>Click Here</button>
    </>
  );**/
  /**Exercise 4, add an item to toppings on click of button
  const [pizza, setPizza] = useState({
    name: "Spicy mushroom",
    toppings: ["Mushroom"],
  });

  return (
    <>
      <h1>{}</h1>
      <button
        onClick={() =>
          setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] })
        }
      >
        Click Here
      </button>
    </>
  ); */
  /**Exercise 5, 
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  return (
    <>
      {cart.items.map((item) => (
        <p>{item.quantity}</p>
      ))}
      <button
        style={{ color: "blue", height: 50, width: 50 }}
        onClick={() => {
          setCart(
            produce((draft) => {
              const item = draft.items.find((item) => item.id === 1);
              if (item) item.quantity = 2;
            })
          );
        }}
      >
        Click
      </button>
    </>
  ); */

  const [selectedCategory, setSelectedCatgeory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aba", amount: 20, category: "Utilities" },
    { id: 2, description: "bab", amount: 40, category: "Utilities" },
    { id: 3, description: "cab", amount: 50, category: "Utilities" },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCatgeory(category)}
      />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;

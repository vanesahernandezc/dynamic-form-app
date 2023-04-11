import "./FirstStep.css";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardFruit from "./CardFruit";
import { IFruits } from "../../interface/IFruits";
// import CardFruit from "./CardFruit";

export const fruits = [
  {
    id: 1,
    icon: "🍅",
    name: "Tomato",
    description:
      "Whether sliced in a salad, cooked in a sauce, or enjoyed on their own, tomatoes are a versatile and delicious.",
  },
  {
    id: 2,
    icon: "🍇",
    name: "Grapes",
    description:
      "Grapes are a delicious and healthy fruit that come in a variety of flavors. They are a snack that can be enjoyed at any time.",
  },
  {
    id: 3,
    icon: "🍌",
    name: "Banana",
    description:
      "Not just a tasty fruit, bananas are also packed with potassium and other important nutrients.",
  },
];

export default function FirstStep() {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const clickCard = (fruit: IFruits) => {
    setSelectedCard(fruit.id);
    localStorage.setItem("fruitName", fruit.name);
    localStorage.setItem("iconFruit", fruit.icon);
  };

  return (
    <div>
      <h2>Choose your favourite fruit</h2>
      <h4>Select your fruit and then click the button of "Next step" </h4>
      <Container className="p-5 text-center">
        <Row>
          {fruits.map((fruit: IFruits, index) => (
            <CardFruit
              fruit={fruit}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const person1 = {
    name: "Mahfuz",
    profession: "Doctor",
  };

  const personBackkgroundColor = {
    backgroundColor: "cyan",
    color: "black",
  };

  const nameArray = [
    "Shakib Al Hasan",
    "Musfiqur Rahman",
    "Tamim Iqbal",
    "Mahmudul Hasan",
    "Virat Kohli",
    "Shoib Ali",
  ];

  const products = [
    {
      name: "Photoshop",
      price: "$22.99",
      description:
        "Create beautiful graphics, photos, and art on desktop, web, and iPad. Comes with Adobe Fresco for drawing and painting.",
    },
    {
      name: "Adobe Premiere Pro",
      price: "$22.99",
      description: "Professional video and film editing.",
    },
    {
      name: "Illustrator",
      price: "$22.99",
      description:
        "Create precise designs, Illustrations, and vector graphics on desktop and iPad.",
    },
    {
      name: "PDF Reader",
      price: "$10.99",
      description: "Make your life easier with PDF Reader",
    },
  ];

  const countryNames = ["Bangladesh", "India", "Pakistan"];
  return (
    <div className="App">
      <header className="App-header">
        <h3>Starting React basics again.</h3>
        <h4 style={personBackkgroundColor}>
          Say hello to MR.{person1.name} and his profession is{" "}
          {person1.profession}
        </h4>

        <Counter></Counter>

        <UsersList></UsersList>
        {
          <ul>
            {products.map((item) => (
              <li>{item.name}</li>
            ))}
            {nameArray.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        }
        {products.map((item) => (
          <Product product={item}></Product>
        ))}
        <PersonDetails
          name={nameArray[0]}
          nationality={countryNames[0]}
        ></PersonDetails>
        <PersonDetails
          name={nameArray[1]}
          nationality={countryNames[0]}
        ></PersonDetails>
        <PersonDetails
          name={nameArray[2]}
          nationality={countryNames[0]}
        ></PersonDetails>

        <PersonDetails
          name={nameArray[4]}
          nationality={countryNames[1]}
        ></PersonDetails>
        <PersonDetails
          name={nameArray[5]}
          nationality={countryNames[2]}
        ></PersonDetails>
      </header>
    </div>
  );
}

function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h5>Total user :{users.length}</h5>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleCount}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    height: "240px",
    width: "200px",
    margin: "10px",
  };

  const { name, price, description } = props.product;
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h3>US{price}/mo</h3>
      <p>
        <small>{description}</small>
      </p>
      <button>Buy Now</button>
    </div>
  );
}

function PersonDetails(props) {
  const personDetailsStyle = {
    border: "3px solid gold",
    margin: "10px",
    width: "70%",
    backgroundColor: "lightblue",
  };
  return (
    <div style={personDetailsStyle}>
      <h4>Name: {props.name}</h4>
      <h6>Profession: Cricketer</h6>
      <h6>Nationality:{props.nationality} </h6>
    </div>
  );
}

export default App;

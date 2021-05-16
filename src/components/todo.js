import React, { useState } from "react";
import notes from "../images/notes.svg";
import "../App.css";

const Todo = () => {
  const [inpData, setInpData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(1);
  const [editItem, setEditItem] = useState(null);
  const addItem = () => {
    if (!inpData) {
      alert("Add Data Please!");
    } else if (inpData && !toggleBtn) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, name: inpData };
          }
          return elem;
        })
      );
      setToggleBtn(1);

      setInpData("");

      setEditItem(null);
    } else {
      const AllInpData = { id: new Date().getTime().toString(), name: inpData };
      setItems([...items, AllInpData]);
      setInpData("");
    }
  };
  //Deleting the item
  const deleteItem = (index) => {
    const updatedData = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedData);
  };
  //Edit the item
  const EditItem = (id) => {
    let ItemEdited = items.find((elem) => {
      return elem.id === id;
    });
    setToggleBtn(0);

    setInpData(ItemEdited.name);

    setEditItem(id);
  };
  //removeAll
  const remove = () => {
    console.log("object");
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={notes} alt="img" />
            <figcaption>Add Your list here 🤞</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inpData}
              onChange={(e) => setInpData(e.target.value)}
            />
            {toggleBtn ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => EditItem(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={remove}
            >
              <span class="bold">CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

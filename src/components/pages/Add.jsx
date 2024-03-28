import { Link } from "react-router-dom";
import "./Add.scss";
import { useState } from "react";
import axios from "axios";
const Add = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    group: "",
    age: "All",
  });
  const postStudent = async () => {
    try {
      await axios.post("http://localhost:3000/students", formData);
    } catch (error) {
      console.log(error.message, "hatolik bor");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add">
      <div className="container">
        <div className="add_head">
          <Link to="/">go back</Link>
          <span>Add student</span>
        </div>
        <div className="add_body">
          <div className="add_info">
            <div className="info">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div className="info">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </div>
            <div className="info">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={handleChange}
                name="age"
              />
            </div>
            <div className="info">
              <label htmlFor="group">Group</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                id=""
              >
                <option value="All">All</option>
                <option value="N45">N45</option>
                <option value="N50">N50</option>
                <option value="N38">N38</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <Link onClick={postStudent} to="/">
              Add Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;

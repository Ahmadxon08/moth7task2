import { Link } from "react-router-dom";
import "./Home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Students from "./Students";

import styled from "styled-components";

// import { useDarkMode } from "./DarkMode";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");
  // const [darkMode, toggleDarkMode] = useDarkMode();

  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      setStudents(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:3000/students/${selectedId}`);
      fetchStudent();
      setShowModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    setFilterGroup(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const isInGroup = filterGroup === "All" || student.group === filterGroup;
    const matchedStudent =
      (student.firstName &&
        student.firstName.toLowerCase().includes(searchTerm)) ||
      (student.lastName &&
        student.lastName.toLowerCase().includes(searchTerm)) ||
      (student.group && student.group.toLowerCase().includes(searchTerm));
    return isInGroup && matchedStudent;
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  ///////////////////////////////////////////////////

  const StyledA = styled.a`
    padding: 10px 22px;
    font-size: 24px;
    background-color: rgb(7, 91, 17);
    font-family: Roboto;
    font-weight: 700;
    border-radius: 16px;

    color: rgb(227, 232, 233);
    margin-left: 20px;
  `;
 const StyledSpan = styled.span`
  font-size: 22px;
  font-family: Roboto;
  font-weight: 700;
  color: #000000;
  width: 20%;
`;

  return (
    <div className="home">
      <div className="container">
        <div className="home_head">
          <StyledSpan>Student info</StyledSpan>
          <div className="texts_act">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder="Search..."
            />
            <select value={filterGroup} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="N45">N45</option>
              <option value="N50">N50</option>
              <option value="N38">N38</option>
            </select>
          </div>
          <div className="btn">
            <Link to="/add">
              <StyledA>Add +</StyledA>
            </Link>
          </div>
          {/* <div className="btnMode">
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
          </div> */}
        </div>
        <div className="home_body">
          <div className="body_head">
            <span>Students ({filteredStudents.length})</span>
            <span>FirstName</span>
            <span>LastName</span>
            <span>Age</span>
            <span>Group</span>
            <span>Action</span>
          </div>
          <div className="body_data">
            <Students
              students={filteredStudents}
              showModal={showModal}
              setShowModal={setShowModal}
              setSelectedId={setSelectedId}
              deleteStudent={deleteStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

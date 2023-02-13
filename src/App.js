import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Header } from "./components/header/Header";
import { Materials } from "./components/main/Materials";
import { Ratings } from "./components/main/Ratings";
import { Student } from "./components/main/Student";
import { Aside } from "./pages/Aside";
import { DetailsStudents } from "./pages/DetailsStudents";
import { Late } from "./pages/Late";
import { Param } from "./pages/Param";
import { Submitted } from "./pages/Submitted";
import { Universal } from "./pages/Universal";
import { Waiting } from "./pages/Waiting";
function App() {
  const navigate = useNavigate();
  const goToStudenPage = () => {
    navigate("/courses/students");
  };
  const goToMaterialsPage = () => {
    navigate("/courses/materials");
  };
  const goToNotificationsPage = () => {
    navigate("/notifications");
  };
  const goToSchedulePage = () => {
    navigate("/notifications");
  };
  return (
    <Content>
      <Aside />
      <Container>
        <Header />
        <Routes>
          <Route
            path="/courses"
            element={
              <Universal
                title={"Coureses Page"}
                children="Go to Schedule"
                onClick={goToSchedulePage}
              />
            }
          />
          <Route path="/courses/students" element={<Student />} />
          <Route
            path="/courses/students/:id/details"
            element={<DetailsStudents />}
          />
          <Route path="/courses/ratings" element={<Ratings />} />
          <Route path="/courses/materials" element={<Materials />} />
          <Route path="/courses/materials/:id/details" element={<Param />}>
            <Route path="submitted" element={<Submitted />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
          <Route
            path="/anouncements"
            element={
              <Universal
                title="Anouncements Page"
                children="Go to Students Page"
                onClick={goToStudenPage}
              />
            }
          />
          <Route
            path="/notifications"
            element={
              <Universal
                title="Notifications Page"
                children="Go to Materials Page"
                onClick={goToMaterialsPage}
              />
            }
          />
          <Route
            path="/schedule"
            element={
              <Universal
                title="Schedule Page"
                children="Go to Notifications Page"
                onClick={goToNotificationsPage}
              />
            }
          />
          <Route path="*" element={<h1>Not Founded.........</h1>} />
        </Routes>
      </Container>
    </Content>
  );
}

export default App;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
`;

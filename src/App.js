import './App.css';
import Drawer from './Components/Drawer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { IsUserRedirect, ProtectedRoute } from "./Routes/Routes";
import Login from './Components/Login/Login';
import { useLocalContext } from './context/createclasscontext';
import db from './Lib/Firebase'
import { useEffect, useState } from 'react';
import JoinedClasses from './Components/JoinedClasses/JoinedClasses';
import Main from './Components/Main/Main';
import AboutPage from '../src/Components/About/AboutPage';
import Contact from './Components/Contact/Contact';
function App() {
  const { loggedInMail } = useLocalContext();
  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("CreatedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [loggedInMail]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });

      return () => unsubscribe();
    }
  }, [loggedInMail]);

  return (
    <>
      <Router>
        <Switch>
          {createdClasses.map((item, index) => (
            <Route key={index} exact path={`/${item.id}`}>
              <Drawer />
              <Main classData={item} />
            </Route>
          ))}
          {joinedClasses.map((item, index) => (
            <Route key={index} exact path={`/${item.id}`}>
              <Drawer />
              <Main classData={item} />
            </Route>
          ))}
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <IsUserRedirect
            user={loggedInMail}
            loggedInPath="/"
            path="/signin"
            exact
          >
            <Login />
          </IsUserRedirect>
          <ProtectedRoute user={loggedInMail} path="/" exact>
            <Drawer />
            <ol className="joined">
              {createdClasses.map((item) => (
                <JoinedClasses classData={item} />
              ))}

              {joinedClasses.map((item) => (
                <JoinedClasses classData={item} />
              ))}
            </ol>
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
}
export default App;

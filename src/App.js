import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RootLayout from './RootLayout';
import { useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { auth, onAuthStateChanged } from './firebase';
import { useDispatch } from 'react-redux';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import ProfileScreen from './screens/ProfileScreen';
import DefaultScreen from './screens/DefaultScreen';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path='profile' element={<ProfileScreen />} />
      </Route >
    )
  );

  const router2 = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<LoginScreen />} />
      </Route >
    )
  );

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else {
        dispatch(logout());
      }
    });
    return unSubscribe;
  }, []);

  return (
    <RouterProvider router={user ? router1 : router2} />
  );
}

export default App;

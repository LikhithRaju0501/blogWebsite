import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Blog from './components/Blog/Blog';
import {rootReducer} from './redux/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Forumcomp from './components/Forums/Forumcomp';
import Contactcomp from './components/Contact/Contactcomp';
import BlogContent from './components/BlogContent/BlogContent';
import UseFormComponent from './components/UseFormComponent/UseFormComponent';

const store=createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path='*' element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/forums" element={<Forumcomp />} />
      <Route path="/contact" element={<Contactcomp />} />
      <Route path="/blogContent/:id" element={<BlogContent />} />
      <Route path="/useForm" element={<UseFormComponent />} />
    </Routes>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

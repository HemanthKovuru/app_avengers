import React, { useEffect, useState } from "react";
import "./Hero.scss";
import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import Navbar from "../../components/Navbar/Navbar";
import BookCard from "../../components/BookCard/BookCard";
import axios from "axios";

const Hero = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [signUpPopUp, setSignUpPopUp] = useState(false);
  const [books, setBooks] = useState("");

  const getBooks = async () => {
    try {
      const response = await axios({
        url: `http://localhost:9800/api/v1/books`,
        method: "GET",
      });
      console.log(response);
      if (response.data.status === "success") {
        setBooks(response.data.data.books);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <Navbar setOpenPopUp={setOpenPopUp} />
      {openPopUp && (
        <SignIn setOpenPopUp={setOpenPopUp} setSignUpPopUp={setSignUpPopUp} />
      )}
      {signUpPopUp && (
        <SignUp setOpenPopUp={setOpenPopUp} setSignUpPopUp={setSignUpPopUp} />
      )}
      <div className='hero'>
        <div className='hero-sidebar'>
          <div className='hero-sidebar-heading'>Browse By Category</div>
          <div className='hero-sidebar-child'>Architecture</div>
          <div className='hero-sidebar-child'>Arts & Photography</div>
          <div className='hero-sidebar-child'>Biographies & Memoirs</div>
          <div className='hero-sidebar-child'>Body, Mind & Spirit</div>
          <div className='hero-sidebar-child'>Business & Economics</div>
          <div className='hero-sidebar-child'>Children & Teens</div>
          <div className='hero-sidebar-child'>Computer & Internet</div>
          <div className='hero-sidebar-child'>Cookery, Food & Wine</div>
          <div className='hero-sidebar-child'>Dictionaries & Language</div>
          <div className='hero-sidebar-child'>
            Economics, finance, business & management
          </div>
          <div className='hero-sidebar-child'>English Language Teaching</div>
          <div className='hero-sidebar-child'>Environment & Geography</div>
          <div className='hero-sidebar-child'>Fiction</div>
          <div className='hero-sidebar-child'>History & Humanities</div>
          <div className='hero-sidebar-child'>Law</div>
          <div className='hero-sidebar-child'>Lifestyle</div>
          <div className='hero-sidebar-child'>
            Literature & literary studies
          </div>
          <div className='hero-sidebar-child'>Medicine</div>
          <div className='hero-sidebar-child'>Music</div>
        </div>
        <div className='hero-books'>
          {books &&
            books.map((book) => {
              return <BookCard book={book} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

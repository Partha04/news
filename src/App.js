import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [news, setNews] = useState([]);

  const [qry, setQry] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [news])


  const setQuery=(q)=>{
    setQry(q);
  }

  const searchBySources= async (src)=>{
    console.log("sources searched "+src);
    await axios.get(
      "/sources",{ params:{"sources":src,
      },} )
    .then(prp=>{
      console.log(prp);
      toast.success("Successfull")
      setNews(prp.data.articles);
    })
    .catch(err=>{
      console.log("well error");
      console.log(err)});
  }


  const SearchByCategory=async (cat)=>{

    console.log("category searched "+cat);
    await axios.get(
      "/category",{ params:{"category":cat,
      },} )
    .then(prp=>{
      console.log(prp);
      toast.success("Successfull");
      setNews(prp.data.articles);
    })
    .catch(err=>{
      console.log("well error");
      console.log(err)});

  }

  const searchNews=async()=>{
    
    console.log("Everything news searched");
   await axios.get(
      "/news",{ params:{"qry":qry},} )
    .then(prp=>{
      console.log(prp);
      toast.success("Successfull")
      setNews(prp.data.articles);
    })
    .catch(err=>{
      console.log("well error");
      console.log(err)});

  }


  return (
    <div className="App">
      <Navbar setQuery={setQuery} SearchByCategory={SearchByCategory} searchBySources={searchBySources} searchNews={searchNews} qry={qry} />
      <div class="newscontainer">
      <ToastContainer position="bottom-right" autoClose={1500} />

      {news.map((entry) => {
        return <Card entry={entry} />;
      })}
      </div>
    </div>
  );
}

export default App;

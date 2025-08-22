import { Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useEffect, useState} from "react";
import {cardArray} from "../constants";

export const Layout = () => {
  const [ searchText, setSearchText ] = useState('')
  const [ products, setProducts ] = useState( [])

  const hendleSearch = (event) => (
    setSearchText(event.target.value)
  )

  const hendleSearchArray = () => {
    setProducts(cardArray.filter((p)=> p.title.includes(searchText) || p.price.includes(searchText)))}

  useEffect( () => {
    setProducts(cardArray)
  }, [])

  return(
   <>
     <Header/>
     <main>
       <section className="search">
         <div className="container">
           <div className="search-box">
             <input
               className="text"
               value={searchText}
               onChange={hendleSearch}
               id=""
               name=""
               placeholder="Поиск по объявлениям"
             />
             <button
               onClick={hendleSearchArray}
               className="btn btn-primary search-btn"
               type="button"
             >
               <img
                 className="search-btn__icon"
                 src="/image/search.svg"
                 alt="search"
               />
               <span className="search-btn__text">Найти</span>
             </button>
           </div>
         </div>
       </section>
       <Outlet context={{products}}/>
     </main>

   </>
  )
}
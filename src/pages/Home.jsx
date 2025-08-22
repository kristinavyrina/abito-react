import {Card} from "../components/Card/Card";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {sidebarArray} from "../constants";
import {useOutletContext} from "react-router-dom";

export const Home = () => {
  const { products } = useOutletContext()
  return (
   <>

       <section className="content">
         <div className="container">
           <div className="content-box">
             <div className="content-main">
               <h2 className="content-main__title"> Рекомендации для вас</h2>

               <div className="content-main__list">
                 {
                   products.map(card => (
                     <Card
                       key={card.id}
                       id={card.id}
                       title={card.title}
                       price={card.price}
                       address={card.address}
                       date={card.date}
                       img={card.img}
                     />
                   ))
                 }
               </div>
             </div>

             <div className="content-side">
               <h3 className="content-side__title"> Сервисы и услуги</h3>
               <div className="content-side__box">
                 <div className="content-side__list">

                   {
                     sidebarArray.map(sidebar => (
                       <Sidebar
                         key={sidebar.id}
                         img={sidebar.img}
                         title={sidebar.title}
                         text={sidebar.text}
                       />
                     ))
                   }

                 </div>
                 <div className="content-side__footer">
                   <p className="content-side__footer--item">
                     © ООО «Абито», 2011–2021
                   </p>
                   <a
                     className="content-side__footer--item"
                     href="#"
                   >
                     Политика конфиденциальности
                   </a>
                   <a
                     className="content-side__footer--item"
                     href="#"
                   >
                     Обработка данных
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

   </>
  )
}
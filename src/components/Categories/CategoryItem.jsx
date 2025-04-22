import "./CategoryItem.css"
 
 const CategoryItem = () => {
   return (
     <li className="category-item">
       <a href="#">
         <img
           src="img/categories/categories1.png"
           alt=""
           className="category-image"
         />
         <span className="category-title">Pottery mug</span>
       </a>
     </li>
   );
 };
 
 export default CategoryItem;
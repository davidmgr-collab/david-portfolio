// import react from "react";
// import {Link } from "react-router-dom";

// function Home(){
//     return(
//         <div>
//         <div className="bg-blue-800 p-64 m-8 mx-auto text-center text-white ">
//         <h1 className="text-xl p-4">David Mugiraneza</h1>
//         <h2 className="text-l p-4">Creative IT Developer| Web Design</h2>
//         <p  className="text-sm p-4">
//              I build modern, responsive, and beautiful websites using HTML, CSS, JavaScript, MYSQL and React.
//         </p>
//         <Link to="/projects" className="bg-blue-500 rounded p-3 transition delay-150 duration-300 ease-in-out hover:bg-blue-500"> View My Work</Link>
//         </div>
//         </div>
//     )
// }
// export default Home;
import { useState } from "react";
import ContactForm from "../components/ContactForm";


const Home = () => {


const [openForm,setOpenForm] = useState(false);



return (

<section
className="
min-h-screen
bg-[#081225]
flex
items-center
justify-center
px-6
"
>


<div className="text-center">


<h1
className="
text-5xl
md:text-7xl
font-bold
text-white
"
>

David Mugiraneza

</h1>



<h2
className="
text-2xl
text-cyan-400
mt-4
"
>

IT Developer

</h2>



<p
className="
text-gray-400
max-w-xl
mx-auto
mt-6
"
>

I build modern web applications,
school management systems and
responsive websites.

</p>




<button

onClick={()=>setOpenForm(true)}

className="
mt-8
bg-cyan-400
text-black
px-8
py-4
rounded-full
font-bold
hover:bg-cyan-300
transition
"

>

Say Hello 👋

</button>



</div>




{
openForm && (

<ContactForm

closeForm={()=>setOpenForm(false)}

/>

)

}



</section>

);


};


export default Home;
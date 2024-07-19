import {  forwardRef } from "react";
import Projects from "./Projects";

  const Products = forwardRef<HTMLDivElement, {}>((_, ref) =>{
  return (
    <div ref={ref} className='px-5 md:px-24 py-8 md:py-16 md:pb-20'>
        <Projects />
    </div>
  )
})

export default Products
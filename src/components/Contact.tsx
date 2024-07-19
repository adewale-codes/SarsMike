import { forwardRef } from "react";
import Email from "./Email";

  const Contact = forwardRef<HTMLDivElement, {}>((_, ref) =>{
  return (
    <div ref={ref} className='px-5 md:px-24 md:pb-36'>
        <Email />
    </div>
  )
})

export default Contact
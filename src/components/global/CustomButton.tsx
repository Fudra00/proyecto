import { Button } from "@mui/material"

interface DataButton{
    title:string;
   
}

export const CustomButton = ({title}:DataButton) => {
  return (
    <>
    <Button variant="contained">{title}</Button>
  
    
    </>



  )
}

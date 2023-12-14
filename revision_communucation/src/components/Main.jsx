import { useState } from "react";
import Afficharge from "./Afficharge";
import Recherche from "./Recherche";



export default function Main(){
    const list_marque =[
        {
          Marque: "Toyota",
          Description_de_Marque: "Japanese automaker known for its reliable and fuel-efficient vehicles.",
          Date_creation:"1937-08-28"
        },
        {
          Marque: "Ford",
          Description_de_Marque: "American automaker with a long history in the automotive industry.",
          Date_creation: "1903-06-16"
        },
        {
          Marque: "Volkswagen",
          Description_de_Marque: "German automaker producing a wide range of vehicles from compact cars to luxury models.",
          Date_creation: "1937-05-28"
        },
        {
          Marque: "Honda",
          Description_de_Marque: "Japanese multinational known for motorcycles and efficient automobiles.",
          Date_creation: "1948-09-24"
        },
        {
          Marque: "Chevrolet",
          Description_de_Marque: "American brand offering a diverse lineup of vehicles.",
          Date_creation: "1911-11-03"
        },
        {
          Marque: "BMW",
          Description_de_Marque: "German luxury automaker with a focus on performance and design.",
          Date_creation: "1916-03-07"
        },
        {
          Marque: "Mercedes-Benz",
          Description_de_Marque: "German brand known for luxury vehicles, buses, coaches, and trucks.",
          Date_creation: "1926-06-28"
        },
        {
          Marque: "Nissan",
          Description_de_Marque: "Japanese automaker with a wide range of vehicles and a strong global presence.",
          Date_creation: "1933-12-26"
        },
        {
          Marque: "Audi",
          Description_de_Marque: "German manufacturer of luxury vehicles, motorcycles, and engines.",
          Date_creation: "1910-05-24"
        },
        {
          Marque: "Hyundai",
          Description_de_Marque: "South Korean automaker producing a variety of vehicles.",
          Date_creation: "1967-12-29"
        },
        {
          Marque: "Mazda",
          Description_de_Marque: "Japanese automaker known for its innovative design and sporty vehicles.",
          Date_creation: "1920-01-30"
        },
        {
          Marque: "Subaru",
          Description_de_Marque: "Japanese automaker known for its all-wheel-drive vehicles and boxer engine design.",
          Date_creation: "1953-07-15"
        },
        {
          Marque: "Kia",
          Description_de_Marque: "South Korean automaker producing a range of vehicles and electric cars.",
          Date_creation: "1944-06-09"
        },
        {
          Marque: "Ferrari",
          Description_de_Marque: "Italian luxury sports car manufacturer with a strong racing heritage.",
          Date_creation: "1939-09-13"
        },
        {
          Marque: "Lexus",
          Description_de_Marque: "Japanese luxury vehicle division of Toyota known for its premium cars.",
          Date_creation: "1989-09-01"
        },
        {
          Marque: "Jeep",
          Description_de_Marque: "American brand known for its rugged SUVs and off-road vehicles.",
          Date_creation: "1941-07-15"
        },
        {
          Marque: "Porsche",
          Description_de_Marque: "German sports car manufacturer known for high-performance vehicles.",
          Date_creation: "1931-04-25"
        },
        {
          Marque: "Chrysler",
          Description_de_Marque: "American brand with a history in the automotive industry, now part of Stellantis.",
          Date_creation: "1925-06-06"
        },
        {
          Marque: "Volvo",
          Description_de_Marque: "Swedish automaker known for safety innovations and premium vehicles.",
          Date_creation: "1927-04-14"
        },
        {
          Marque: "Jaguar",
          Description_de_Marque: "British luxury car manufacturer known for elegant and high-performance vehicles.",
          Date_creation: "1922-09-04"
        }
      ]
    const [result,setResult]=useState(list_marque)
    function cherche(v){
        setResult(list_marque.filter(et=>et.Marque.toLowerCase() === v.toLowerCase()))
        v===""&&setResult(list_marque)
    }
    return(
        <>
            <Recherche cherche={cherche} />
            <Afficharge list_marque={result}/>
        </>
    )
}
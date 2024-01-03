import "./style.css";
import { Idata } from "./interfaces";
import { data } from "./mock-data";

function sortObjects(myArray: Array<Idata>): Idata[] {
   const sortedArray: Idata[] = myArray.sort((prev: Idata, next: Idata): number => {
      return next.width - prev.width;
   });
   return sortedArray;
}

console.log(sortObjects(data));

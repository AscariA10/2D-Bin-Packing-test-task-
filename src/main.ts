import "./style.css";
import { data } from "./mock-data";

interface Idata {
   width: number;
   height: number;
   name: string;
   id: string;
}

function sortObjects(array: any): Idata[] {
   const sortedArray: Idata[] = array.sort((prev: Idata, next: Idata): number => {
      return next.width - prev.width;
   });
   return sortedArray;
}

console.log(sortObjects(data));

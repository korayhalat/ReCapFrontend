import { Pipe,PipeTransform } from "@angular/core";
import { Car } from "../models/car";

@Pipe({
    name: 'carDetailFilter'
})


export class CarDetailFilterPipe implements PipeTransform{

    transform(value: Car[], carDetailFilterText:string):Car[] {
        carDetailFilterText = carDetailFilterText?carDetailFilterText.toLocaleLowerCase():'';
        return carDetailFilterText?value.filter((c:Car)=> 
        c.id.toString().toLocaleLowerCase().indexOf(carDetailFilterText)!==-1 ||
        c.colorId.toString().toLocaleLowerCase().indexOf(carDetailFilterText)!==-1 ||
        c.modelYear.toString().toLocaleLowerCase().indexOf(carDetailFilterText)!==-1||
        c.brandId.toString().toLocaleLowerCase().indexOf(carDetailFilterText)!==-1 ||
        c.dailyPrice.toString().toLocaleLowerCase().indexOf(carDetailFilterText)!==-1 ||
        c.description.toString().toLocaleLowerCase().indexOf(carDetailFilterText)!==-1):value;
        
    }

}
    
   
  
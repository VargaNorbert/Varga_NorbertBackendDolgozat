import { Artwork } from "./artwork";
import { Statue } from "./statue";

document.addEventListener('DOMContentLoaded',()=>{
    let szulo = document.getElementById('hiba') as HTMLDivElement;
    let list : Artwork[];

    function hiba( szoveg : string ){
        let p = document.createElement('p');
        p.innerHTML = szoveg;
        szulo.appendChild(p); 
    }


    document.getElementById('button')?.addEventListener('click',()=>{

        while (szulo.firstChild) {
            szulo.removeChild(szulo.lastChild as HTMLElement);
          }

        let ellTitle = /^[a-zA-z" ",]+$/;
        let title : string = (document.getElementById('title') as HTMLInputElement)?.value ;

        if(!ellTitle.test(title)){
            hiba('Hibás név!')
        }

        let ellYear = /^[1-9][0-9]*/;
        let year: string = (document.getElementById('year') as HTMLInputElement)?.value ;

        if(!ellYear.test(year) || parseInt(year)>2022){
            hiba('Hibás év!')
        }

        let ellPrice = /^[1-9]{1}[0-9]*$/;
        let price: string = (document.getElementById('price') as HTMLInputElement)?.value ;

        if(!ellPrice.test(price)){
            hiba('Hibás ár!')
        }

        let ellHeight = /^[0-9][1-9]+$/;
        let height : string = (document.getElementById('height') as HTMLInputElement)?.value ;

        if(!ellHeight.test(height)){
            hiba('Hibás méret!')
        }

        if(ellTitle.test(title)&&ellYear.test(year)&&ellPrice.test(price)&&ellHeight.test(height)){
            let statue :Statue = new Statue(title,parseInt(year),parseInt(price),parseInt(height));
            list.push(statue);
            
        }




    })

   

   


})
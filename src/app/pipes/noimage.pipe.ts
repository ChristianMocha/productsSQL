import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {


 
  transform(imagen: any[]): string {


    let image: any = imagen;
    
    if( !imagen ){
      return 'assets/img/noimage.png'
    }
    
    if( imagen.length > 0 ){
      return image;
    }else{
      return 'assets/img/noimage.png'
    }
  }

}

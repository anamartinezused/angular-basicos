import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=['heroe1', 'heroe2','heroe3','heroe4'];
  heroeBorrado:string='';

  borrarHeroe(){
   this.heroeBorrado= this.heroes.pop()|| '';
   
  }
}

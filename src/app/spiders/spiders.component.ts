import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-spiders',
  templateUrl: './spiders.component.html',
  styleUrl: './spiders.component.css'
})
export class SpidersComponent {

  spiders:any

  constructor(private base:BaseService){
    this.base.getSpiders().valueChanges().subscribe(
      (res)=> this.spiders=res
    )
  }

  pushSpider(){
    this.base.pushSpider()
  }
}

import { Component,HostBinding  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyservicesService }from './myservices.service';
import { slideInDownAnimation } from './animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  animations: [ slideInDownAnimation ],
  providers:[MyservicesService]
})
export class DataComponent{

paramValueStr:string;
@HostBinding('@routeAnimation') routeAnimation = true;
@HostBinding('style.display')   display = 'block';
@HostBinding('style.position')  position = 'absolute';

  constructor(private router: ActivatedRoute)
  {
    this.paramValueStr = router.snapshot.params['paramStr'];
    console.log(this.paramValueStr);
  }
}

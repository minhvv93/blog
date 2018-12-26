import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailarticleComponent } from './detailarticle/detailarticle.component';

@NgModule({
  declarations: [DetailarticleComponent],
  imports: [
    CommonModule
  ],
  exports : [DetailarticleComponent]
})
export class ArticleModule { }

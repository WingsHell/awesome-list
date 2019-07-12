import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';


@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeFeatureCardComponent, HomeFeatureComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }

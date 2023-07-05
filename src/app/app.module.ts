import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadialBarChartComponent } from './shared/components/charts/radial-bar-chart/radial-bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { DarkCardComponent } from './shared/utils/cards/dark-card/dark-card.component';
import { LightButtonComponent } from './shared/components/buttons/light-button/light-button.component';
import { HomeParkingCardComponent } from './shared/components/cards/home/home-parking-card/home-parking-card.component';
import { HomeLightCardComponent } from './shared/components/cards/home/home-light-card/home-light-card.component';
import { LightCardComponent } from './shared/utils/cards/light-card/light-card.component';
import { DarkButtonComponent } from './shared/components/buttons/dark-button/dark-button.component';
import { HomePerformanceCardComponent } from './shared/components/cards/home/home-performance-card/home-performance-card.component';
import { DistributedColumnsChartsComponent } from './shared/components/charts/distributed-columns-charts/distributed-columns-charts.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { SignComponent } from './pages/sign/sign.component';
import { EntranceComponent } from './shared/components/sign/entrance/entrance.component';
import { DepartureComponent } from './shared/components/sign/departure/departure.component';
import { EntranceCardComponent } from './shared/components/cards/sign/entrance-card/entrance-card.component';
import { DepartureCardComponent } from './shared/components/cards/sign/departure-card/departure-card.component';
import { AddSignDialogComponent } from './shared/components/dialog/sign/add-sign-dialog/add-sign-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogHeaderComponent } from './shared/components/dialog/dialog-header/dialog-header.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ExpansionPanelComponent } from './shared/components/cash-closing/expansion-panel/expansion-panel.component';
import { PdfButtonComponent } from './shared/components/buttons/pdf-button/pdf-button.component';
import { ExcelButtonComponent } from './shared/components/buttons/excel-button/excel-button.component';
import { CashClosingComponent } from './pages/cash-closing/cash-closing.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadialBarChartComponent,
    SideMenuComponent,
    HeaderComponent,
    PageHeaderComponent,
    DarkCardComponent,
    LightButtonComponent,
    HomeParkingCardComponent,
    HomeLightCardComponent,
    LightCardComponent,
    DarkButtonComponent,
    HomePerformanceCardComponent,
    DistributedColumnsChartsComponent,
    NotificationComponent,
    SignComponent,
    EntranceComponent,
    DepartureComponent,
    EntranceCardComponent,
    DepartureCardComponent,
    AddSignDialogComponent,
    DialogHeaderComponent,
    ExpansionPanelComponent,
    PdfButtonComponent,
    ExcelButtonComponent,
    CashClosingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

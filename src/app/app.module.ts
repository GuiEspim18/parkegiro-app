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
import { EntranceComponent } from './shared/components/pages/sign/entrance/entrance.component';
import { DepartureComponent } from './shared/components/pages/sign/departure/departure.component';
import { EntranceCardComponent } from './shared/components/cards/sign/entrance-card/entrance-card.component';
import { DepartureCardComponent } from './shared/components/cards/sign/departure-card/departure-card.component';
import { AddSignDialogComponent } from './shared/components/dialog/sign/add-sign-dialog/add-sign-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogHeaderComponent } from './shared/components/dialog/dialog-header/dialog-header.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ExpansionPanelComponent } from './shared/components/pages/cash-closing/expansion-panel/expansion-panel.component';
import { PdfButtonComponent } from './shared/components/buttons/pdf-button/pdf-button.component';
import { ExcelButtonComponent } from './shared/components/buttons/excel-button/excel-button.component';
import { CashClosingComponent } from './pages/cash-closing/cash-closing.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { BasicBarChartComponent } from './shared/components/charts/basic-bar-chart/basic-bar-chart.component';
import { SimpleDonutChartComponent } from './shared/components/charts/simple-donut-chart/simple-donut-chart.component';
import { UsersComponent } from './pages/users/users.component';
import { TableComponent } from './shared/components/table/table.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TextInputComponent } from './shared/components/inputs/text-input/text-input.component';
import { PasswordInputComponent } from './shared/components/inputs/password-input/password-input.component';
import { DateInputComponent } from './shared/components/inputs/date-input/date-input.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { SystemColorsComponent } from './shared/components/pages/configurations/system-colors/system-colors.component';
import { ColorInputComponent } from './shared/components/inputs/color-input/color-input.component';
import { ChangeBackgroundComponent } from './shared/components/pages/configurations/change-background/change-background.component';
import { SystemValuesComponent } from './shared/components/pages/configurations/system-values/system-values.component';
import { DangerButtonsComponent } from './shared/components/buttons/danger-buttons/danger-buttons.component';

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
    CashClosingComponent,
    DashBoardComponent,
    BasicBarChartComponent,
    SimpleDonutChartComponent,
    UsersComponent,
    TableComponent,
    ProfileComponent,
    TextInputComponent,
    PasswordInputComponent,
    DateInputComponent,
    ConfigurationsComponent,
    SystemColorsComponent,
    ColorInputComponent,
    ChangeBackgroundComponent,
    SystemValuesComponent,
    DangerButtonsComponent
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

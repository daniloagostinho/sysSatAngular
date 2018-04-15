import { SysSatComponent } from './sys-sat/sys-sat.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './sys-sat/funcionario/funcionario.component';
import { RoutesModule } from './routes/routes.module';
import { EdificiosComponent } from './sys-sat/edificios/edificios.component';
import { CdkTableModule } from '@angular/cdk/table';
import { OrdemServicoComponent } from './sys-sat/ordem-servico/ordem-servico.component';
import { OrcamentosComponent } from './sys-sat/orcamentos/orcamentos.component';
import { RegistrarFuncionarioComponent } from './sys-sat/funcionario/registrar-funcionario/registrar-funcionario.component';
import { EditarFuncionarioComponent } from './sys-sat/funcionario/editar-funcionario/editar-funcionario.component';
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { JsonApiModule } from 'angular2-jsonapi';
import { HttpModule } from '@angular/http';
import { RegistrarEdificiosComponent } from './sys-sat/edificios/registrar-edificios/registrar-edificios.component';
import { EditarEdificioComponent } from './sys-sat/edificios/editar-edificio/editar-edificio.component';
import { RegistrarOrcamentosComponent } from './sys-sat/orcamentos/registrar-orcamentos/registrar-orcamentos.component';
import { EditarOrcamentosComponent } from './sys-sat/orcamentos/editar-orcamentos/editar-orcamentos.component';
import { RegistrarOrdemServicoComponent } from './sys-sat/ordem-servico/registrar-ordem-servico/registrar-ordem-servico.component';
import { EditarOrdemServicoComponent } from './sys-sat/ordem-servico/editar-ordem-servico/editar-ordem-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    SysSatComponent,
    EdificiosComponent,
    OrcamentosComponent,
    OrdemServicoComponent,
    RegistrarFuncionarioComponent,
    EditarFuncionarioComponent,
    RegistrarEdificiosComponent,
    EditarEdificioComponent,
    RegistrarOrcamentosComponent,
    EditarOrcamentosComponent,
    RegistrarOrdemServicoComponent,
    EditarOrdemServicoComponent
  ],
  imports: [
    JsonApiModule,
    CurrencyMaskModule,
    TextMaskModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RoutesModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
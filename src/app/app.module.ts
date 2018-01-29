import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//services
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { ConfigService } from './app.config.service';
import { SpinnerService } from './services/spinner.service';
import { SpinnerComponent } from './shared/spinner.component';
//configuration
//import { NgConfigureModule, ConfigureOptions } from 'ng4-configure/ng4-configure';
//import { MyOptions  } from './my-options';

export function loadConfig(configService) {
  return () => configService.load();
};

export function configFactory(config: ConfigService) {
  return loadConfig(config);
}


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    SpinnerComponent
  ],
  providers: [ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory, // load configuration
      deps: [ConfigService],
      multi: true
    }, AuthGuard, AuthService, SpinnerService],
  entryComponents:[SpinnerComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

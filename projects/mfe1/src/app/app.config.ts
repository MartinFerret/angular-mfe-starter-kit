import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TodoModule} from "./todo/todo.module";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), TodoModule]
};

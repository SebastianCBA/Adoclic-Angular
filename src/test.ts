import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { AppModule } from './app/app.module';

const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);

getTestBed().initTestEnvironment();

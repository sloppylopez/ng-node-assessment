import {async, TestBed} from '@angular/core/testing';
import {AutocompleteComponent} from './autocomplete-component';
import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from './material-module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutocompleteComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AutocompleteComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the table  headers rendered`, () => {
    const fixture = TestBed.createComponent(AutocompleteComponent);
    const app = fixture.componentInstance;
    expect(app.displayedColumns).toEqual([ 'id', 'name', 'brand', 'price', 'availability', 'description', 'category', 'bestRating' ]);
  });

  it('should render the input autocomplete empty', () => {
    const fixture = TestBed.createComponent(AutocompleteComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input').textContent).toBe('');
  });
});

import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should render title in a mar-card-title tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const component = fixture.componentInstance;

    expect(compiled.querySelector('mat-card-title').textContent).toContain(component.title);
  }));

  it('should render username input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input')[0]).toBeDefined();
    expect(compiled.querySelectorAll('input')[0].name).toEqual('username');
    expect(compiled.querySelectorAll('input')[0].type).toEqual('text');

  }));

  it('should render password input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input')[1]).toBeDefined();
    expect(compiled.querySelectorAll('input')[1].name).toEqual('password');
    expect(compiled.querySelectorAll('input')[1].type).toEqual('password');
  }));

  it('should render email input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input')[2]).toBeDefined();
    expect(compiled.querySelectorAll('input')[2].name).toEqual('email');
    expect(compiled.querySelectorAll('input')[2].type).toEqual('email');
  }));

  it('should be invalid when form empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('should correctly validate the email', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    const email = component.signUpForm.controls['email'];
    email.setValue('test.com');
    expect(email.status).toBe('INVALID');
    email.setValue('test@example.com');
    expect(email.status).toBe('VALID');
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestersjavaComponent } from './testersjava.component';

describe('TestersjavaComponent', () => {
  let component: TestersjavaComponent;
  let fixture: ComponentFixture<TestersjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestersjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestersjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

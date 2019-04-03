import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBracketsComponent } from './test-brackets.component';

describe('TestBracketsComponent', () => {
  let component: TestBracketsComponent;
  let fixture: ComponentFixture<TestBracketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

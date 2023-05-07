import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessaggesComponent } from './list-messagges.component';

describe('ListMessaggesComponent', () => {
  let component: ListMessaggesComponent;
  let fixture: ComponentFixture<ListMessaggesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessaggesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMessaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

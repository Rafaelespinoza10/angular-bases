import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigthersComponent } from './figthers.component';

describe('FigthersComponent', () => {
  let component: FigthersComponent;
  let fixture: ComponentFixture<FigthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigthersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

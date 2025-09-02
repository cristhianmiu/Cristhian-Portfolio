import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoverImageComponent } from './my-cover-image.component';

describe('MyCoverImageComponent', () => {
  let component: MyCoverImageComponent;
  let fixture: ComponentFixture<MyCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCoverImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

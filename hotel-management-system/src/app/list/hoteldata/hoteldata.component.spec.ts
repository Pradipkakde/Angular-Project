import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldataComponent } from './hoteldata.component';

describe('HoteldataComponent', () => {
  let component: HoteldataComponent;
  let fixture: ComponentFixture<HoteldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteldataComponent]
    });
    fixture = TestBed.createComponent(HoteldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

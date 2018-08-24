import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMediaItemComponent } from './new-media-item.component';

describe('NewMediaItemComponent', () => {
  let component: NewMediaItemComponent;
  let fixture: ComponentFixture<NewMediaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMediaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

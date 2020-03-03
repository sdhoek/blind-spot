import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundIconComponent } from './sound-icon.component';

describe('SoundIconComponent', () => {
  let component: SoundIconComponent;
  let fixture: ComponentFixture<SoundIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

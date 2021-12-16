import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassetiereaComponent } from './cassetierea.component';

describe('CassetiereaComponent', () => {
  let component: CassetiereaComponent;
  let fixture: ComponentFixture<CassetiereaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CassetiereaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CassetiereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

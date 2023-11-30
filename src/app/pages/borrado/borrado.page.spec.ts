import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorradoPage } from './borrado.page';

describe('BorradoPage', () => {
  let component: BorradoPage;
  let fixture: ComponentFixture<BorradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

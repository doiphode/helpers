import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelperloginPage } from './helperlogin.page';

describe('HelperloginPage', () => {
  let component: HelperloginPage;
  let fixture: ComponentFixture<HelperloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelperloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyhelplistPage } from './myhelplist.page';

describe('MyhelplistPage', () => {
  let component: MyhelplistPage;
  let fixture: ComponentFixture<MyhelplistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhelplistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyhelplistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

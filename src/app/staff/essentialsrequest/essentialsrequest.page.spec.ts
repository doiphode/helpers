import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssentialsrequestPage } from './essentialsrequest.page';

describe('EssentialsrequestPage', () => {
  let component: EssentialsrequestPage;
  let fixture: ComponentFixture<EssentialsrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialsrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssentialsrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

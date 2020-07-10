import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GivefeedbackPage } from './givefeedback.page';

describe('GivefeedbackPage', () => {
  let component: GivefeedbackPage;
  let fixture: ComponentFixture<GivefeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivefeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GivefeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

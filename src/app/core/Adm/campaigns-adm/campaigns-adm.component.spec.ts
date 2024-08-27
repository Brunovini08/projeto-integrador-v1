import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsAdmComponent } from './campaigns-adm.component';

describe('CampaignsAdmComponent', () => {
  let component: CampaignsAdmComponent;
  let fixture: ComponentFixture<CampaignsAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignsAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignsAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

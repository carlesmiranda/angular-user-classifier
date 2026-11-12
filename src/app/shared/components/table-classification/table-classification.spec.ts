import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableClassification } from './table-classification';

describe('TableClassification', () => {
  let component: TableClassification;
  let fixture: ComponentFixture<TableClassification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableClassification],
    }).compileComponents();

    fixture = TestBed.createComponent(TableClassification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

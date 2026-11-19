import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableClassification } from './table-classification';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('TableClassification', () => {
  let component: TableClassification;
  let fixture: ComponentFixture<TableClassification>;

  const initialState = {
    customers: {
      customers: [],
      isLoading: false,
      error: null,
      sortBy: 'id',
    }
  }

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableClassification],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TableClassification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

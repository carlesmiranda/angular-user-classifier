import { Component } from '@angular/core';
import { TableClassification } from '../../shared/components/table-classification/table-classification';

@Component({
  imports: [TableClassification],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}

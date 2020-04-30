import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Sachin Tendulkar', age: 42,},
  {name: 'Virat Kohli', age: 30},
];

@Component({
  selector: 'app-autocomplete-simple-example',
  templateUrl: 'autocomplete-component.html',
  styleUrls: ['autocomplete-component.css'],
})
export class AutocompleteComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  formControl = new FormControl();
  options: string[] = ['Sachin Tendulkar', 'Virat Kohli', 'Rohith Sharma'];
  filteredOptions: Observable<PeriodicElement[]>;

  ngOnInit() {
    this.filteredOptions = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private _filter(value: string): PeriodicElement[] {
    if (value) {
      const filterValue = value.toLowerCase();
      const filteredSet = ELEMENT_DATA.filter(option => option.name.toLowerCase().includes(filterValue));
      this.dataSource = new MatTableDataSource(filteredSet);
      return filteredSet;
    } else {
      return [];
    }

  }
}

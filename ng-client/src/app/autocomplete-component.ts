import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {SearchService} from './services/crud.service';
import {Product} from './interfaces/Product';

@Component({
  selector: 'app-autocomplete-simple-example',
  templateUrl: 'autocomplete-component.html',
  styleUrls: ['autocomplete-component.css'],
})
export class AutocompleteComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private searchService: SearchService) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  stateForm: FormGroup = this.formBuilder.group({
    stateGroup: '',
  });
  stateGroup: Product[];
  displayedColumns: string[] = ['id', 'name', 'brand', 'price', 'availability', 'description', 'category', 'bestRating'];
  dataSource = new MatTableDataSource([]);
  stateGroupOptions: Observable<Product[]>;

  ngOnInit() {
    this.stateForm.get('stateGroup')!.valueChanges
      .pipe(debounceTime(250))
      .pipe(distinctUntilChanged())
      .subscribe(result => this.getProducts(result));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getProducts(result: string) {
    if (result && result.trim() !== '') {
      this.searchService.getProducts(result).subscribe(data => this._filterGroup(data));
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.stateGroupOptions = of(null);
    }
  }

  private _filterGroup(data: object): void {
    if (data !== null || (data as Array<Product>).length > 0) {
      const products = data as Product[];
      this.stateGroup = products;
      this.dataSource = new MatTableDataSource(products);
      this.stateGroupOptions = of(products);
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.stateGroupOptions = of(null);
    }
  }
}

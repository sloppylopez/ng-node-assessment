import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SearchService} from './services/rest.service';
import {Product} from './interfaces/Product';

@Component({
  selector: 'app-autocomplete-simple-example',
  templateUrl: 'autocomplete-component.html',
  styleUrls: ['autocomplete-component.css'],
})
export class AutocompleteComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private searchService: SearchService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  stateForm: FormGroup = this.formBuilder.group({
    stateGroup: '',
  });
  stateGroup: Product[] = null;
  displayedColumns: string[] = ['id', 'name', 'brand', 'price', 'availability', 'description', 'category', 'bestRating'];
  dataSource = new MatTableDataSource([]);
  stateGroupOptions: Observable<Product[]>;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.stateForm.get('stateGroup')!.valueChanges
      .pipe(debounceTime(250))
      .pipe(distinctUntilChanged())
      .subscribe(result => this.getProducts(result));
  }

  private getProducts(result: string) {
    if (result && result.trim() !== '') {
      this.searchService.getProducts(result).subscribe(data => this.filterProduct(data));
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.stateGroupOptions = of(null);
    }
  }

  private filterProduct(data: object): void {
    if (data !== null || (data as Array<Product>).length > 0) {
      const products = data as Product[];
      this.stateGroup = products;
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.stateGroupOptions = of(products);
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.stateGroupOptions = of(null);
    }
  }

  resetAutoInput() {
    this.dataSource = new MatTableDataSource([]);
    this.stateGroupOptions = of(null);
    this.stateGroup = null;
  }

  selectProduct(selectedProduct: string): void {
    if (selectedProduct !== null) {
      this.stateGroup = this.stateGroup.filter(product => product.id === parseInt(selectedProduct, 10));
      this.dataSource = new MatTableDataSource(this.stateGroup);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.stateGroupOptions = of(this.stateGroup);
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.stateGroupOptions = of(null);
    }
  }
}

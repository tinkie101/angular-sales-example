import {Component, OnInit} from '@angular/core';
import {Sale} from '../sale.model';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {
  private url = 'http://localhost:8082/sell';
  private saleData: Sale = new Sale(1, 1, 1, 1);

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  async onSubmitSale(event) {
    const httpParams = new HttpParams()
      .set('accountId', this.saleData.account.toString())
      .set('amount', this.saleData.amount.toString())
      .set('inventoryId', this.saleData.inventory.toString());

    const response = await this.submitData(this.url, httpParams);
    console.log(response);
  }

  submitData(url: string, parameters: HttpParams): Promise<Sale> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.http.get<Sale>(this.url, {params: parameters}).toPromise();

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

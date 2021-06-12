import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    
  ];
  public doughnutChartData: MultiDataSet = [
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#862CF0',
        '#4E2DF7',
        '#344BE0',
        '#2D83F7',
        '#2BB6ED'
      ]
    }
  ];

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales().subscribe(data => {
      console.log(data);

      const labels = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });
  }

}

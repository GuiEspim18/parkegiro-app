import { Component, Input, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.scss']
})
export class ReadialBarChartComponent implements OnInit {

  /* Vars */

  @Input() public percent: number;
  @Input() public label: string;


  /* Contructor */

  constructor() { }


  /* On init */

  public ngOnInit(): void {
    this.donutChart();
  }


  /* Donut chart */

  private donutChart(): void {
    const toPercent: string = `${this.percent}%`;
    const options: any = {
      series: [this.percent],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '65%',
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '36px',
              color: "#0C2B48",
              offsetY: 10
            },
            value: {
              show: false,
            }
          },
          track: {
            background: "#b7b7b7"
          },
        }
      },
      fill: {
        colors: ['#195A97'],
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      },
      labels: [toPercent],
    };
    const chart: ApexCharts = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }

}

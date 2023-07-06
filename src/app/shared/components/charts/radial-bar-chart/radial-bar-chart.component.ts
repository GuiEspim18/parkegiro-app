import { Component, Input, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.scss'],
})
export class ReadialBarChartComponent implements AfterViewInit {

  /* Vars */

  @Input() public percent: number;
  @Input() public label: string;
  @Input() public chartName: string = "radial-bar-chart";


  /* Contructor */

  constructor() { }


  /* On init */

  public ngAfterViewInit(): void {
    this.donutChart();
  }


  /* Donut chart */

  private donutChart(): void {
    const toPercent: string = `${this.percent}%`;
    const options: any = {
      series: [Number(this.percent)],
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
    const chart: ApexCharts = new ApexCharts(document.querySelector(`#${this.chartName}`), options);
    chart.render();
  }

}

import { Component, Input, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-simple-donut-chart',
  templateUrl: './simple-donut-chart.component.html',
  styleUrls: ['./simple-donut-chart.component.scss']
})
export class SimpleDonutChartComponent implements AfterViewInit {

  /* Vars */

  @Input() public label: string;
  @Input() public chartName: string = "simple-donut-chart";

  constructor() { }

  ngAfterViewInit(): void {
    this.distributedCharts();
  }

  private distributedCharts(): void {
    const options: any = {
      series: [144, 200, 141, 117, 323],
      colors: [
        "#4782B9",
        "#195A97",
        "#0C2B48"
      ],
      chart: {
        type: 'donut',
        height: 325,
        toolbar: {
          show: false
        }
      },
      labels: ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      legend: {
        show: false
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '60%',
          distributed: true,
          borderRadiusApplication: 'end',
          borderRadius: 10
        }
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        color: '#f0f0f0'
      },
      // tooltip: {
      //   enabled: shw,
      // },
    };


    const chart: ApexCharts = new ApexCharts(document.querySelector(`#${this.chartName}`), options);
    chart.render();
  }

}

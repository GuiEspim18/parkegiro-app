import { Component, Input, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-distributed-columns-charts',
  templateUrl: './distributed-columns-charts.component.html',
  styleUrls: ['./distributed-columns-charts.component.scss']
})
export class DistributedColumnsChartsComponent implements AfterViewInit {

  /* Vars */

  @Input() public label: string;
  @Input() public chartName: string = "distributed-columns-chart";

  constructor() { }

  ngAfterViewInit(): void {
    this.distributedCharts();
  }

  private distributedCharts(): void {
    const options: any = {
      series: [
        {
          data: [221, 322, 410, 128, 216],
        }
      ],
      chart: {
        height: 314,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      colors: [
        "#195A97",
        "#4782B9",
        "#0C2B48"
      ],
      plotOptions: {
        bar: {
          columnWidth: '60%',
          distributed: true,
          borderRadiusApplication: 'end',
          borderRadius: 10
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio'
        ],
        labels: {
          style: {
            colors: [
              "#0C2B48"
            ],
            fontSize: '12px'
          }
        },
        axisBorder: {
          show: true,
          color: '#2D5755',
          offsetX: 0,
          offsetY: 0
        }
      },
      yaxis: {
        logBase: 10,
        axisBorder: {
          show: true,
          color: '#2D5755',
          offsetX: 0,
          offsetY: 0
        },
        labels: {
          logBase: 10,
          tickAmount: 6,
          min: 6,
          max: 6,
        },

      },
    };

    const chart: ApexCharts = new ApexCharts(document.querySelector(`#${this.chartName}`), options);
    chart.render();
  }

}

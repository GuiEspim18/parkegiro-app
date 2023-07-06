import { Component, Input, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-basic-bar-chart',
  templateUrl: './basic-bar-chart.component.html',
  styleUrls: ['./basic-bar-chart.component.scss']
})
export class BasicBarChartComponent implements AfterViewInit {

  /* Vars */

  @Input() public label: string;
  @Input() public chartName: string = "basic-bar-chart";


  constructor() { 
  }

  ngAfterViewInit(): void {
    this.distributedCharts();
  }

  private distributedCharts(): void {
    const options: any = {
      series: [{
        data: [75, 80, 62, 70, 52]
      }],
      colors: [
        "#195A97",
        "#4782B9",
        "#0C2B48"
      ],
      chart: {
        type: 'bar',
        height: 314,
        toolbar: {
          show: false
        }
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
        categories: ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
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
      }
    };

    const chart: ApexCharts = new ApexCharts(document.querySelector(`#${this.chartName}`), options);
    chart.render();
  }

}

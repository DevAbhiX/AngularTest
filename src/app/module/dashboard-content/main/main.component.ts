import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import type { XYChart } from "@amcharts/amcharts4/charts";
am4core.useTheme(am4themes_animated);



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(BaseChartDirective) chartdata: BaseChartDirective | undefined;
  constructor(private services: ProductService, private chart: am4charts.XYChart) { }
  commonTitle = "See all";
  getCatagryArray: any = [];
  getScoreData: any = [];
  getSeverityButton: any = ["Critical", "High", "High", "High"];
  getScore: any = ["89%", "75%", "75%", "75%"];

  getUnitsArray: any = ["Unit A", "Unit A", "Unit A", "Unit A", "Unit A"];


  getData() {
    // console.log("Click");

  }

  ngOnInit(): void {
    this.services.getAllRiskData().subscribe((data: any) => {
      // console.log(data);
      if (data.length > 0) {
        for (let i = 0; i <= 1; i++) {
          this.getCatagryArray.push(data[i]);
        }
        for (let i = 0; i <= 1; i++) {
          this.getCatagryArray.push(this.getCatagryArray[i]);
        }
      }

    });

  }


  ngAfterViewInit() {
    // For chartDiv
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.logo.disabled = true;

    chart.data = [
      {
        country: "USA",
        visits: 23725
      },
      {
        country: "China",
        visits: 1882
      },
      {
        country: "Japan",
        visits: 1809
      },
      {
        country: "Germany",
        visits: 1322
      },
      {
        country: "UK",
        visits: 1122
      },
      {
        country: "France",
        visits: 1114
      },
      {
        country: "India",
        visits: 984
      },
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 24000;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 35;
    // axis break
    let axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 2100;
    axisBreak.endValue = 22900;
    //axisBreak.breakSize = 0.005;

    // fixed axis break
    let d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
    axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

    // make break expand on hover
    let hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target: any) {
      return chart.colors.getIndex(target.dataItem.index);
    });



    


  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };
  public radarChartType: ChartType = 'radar';
  
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';



  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      },
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: { display: true},
    },
  };
  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };
  

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
  
}

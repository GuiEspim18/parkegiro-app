import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-colors',
  templateUrl: './system-colors.component.html',
  styleUrls: ['./system-colors.component.scss']
})
export class SystemColorsComponent implements OnInit {

  /* Vars */

  public systemComponentLeft: Array<any> = [
    {
      title: "Menu lateral",
      component: [
        {
          name: "Fundo",
          colors: [ 
            {
              color: "#144879",
              name: "Fundo"
            },
            {
              color: "#CECECE",
              name: "Fonte"
            },
          ]
        }
      ]
    },
    {
      title: "Tela",
      component: [
        {
          name: "Fundo",
          colors: [ 
            {
              color: "#f0f0f0",
              name: "Fundo"
            },
            {
              color: "#0C2B48",
              name: "Fonte"
            },
          ]
        },
        {
          name: "Botões",
          colors: [ 
            {
              color: "#195A97",
              name: "Fundo"
            },
            {
              color: "#f0f0f0",
              name: "Fonte"
            },
          ]
        }
      ]
    },
    {
      title: "Cards",
      component: [
        {
          name: "Fundo",
          colors: [ 
            {
              color: "#195A97",
              name: "Fundo"
            },
            {
              color: "#f0f0f0",
              name: "Fonte"
            },
          ]
        },
        {
          name: "Botões",
          colors: [ 
            {
              color: "#195A97",
              name: "Fundo"
            },
            {
              color: "#f0f0f0",
              name: "Fonte"
            },
          ]
        }
      ]
    },
  ]
  public systemComponentRight: Array<any> = [
    {
      title: "Dashboard",
      component: [
        {
          name: "Gráficos",
          colors: [ 
            {
              color: "#144879",
              name: "Cor1"
            },
            {
              color: "#4782B9",
              name: "Cor2"
            },
            {
              color: "#0C2B48",
              name: "Cor3"
            },
          ]
        },
      ]
    },
    {
      title: "Dashboard card",
      component: [
        {
          name: "Fundo",
          colors: [ 
            {
              color: "#CECECE",
              name: "Fundo"
            },
            {
              color: "#0C2B48",
              name: "Fonte"
            }
          ]
        },
        {
          name: "Botões",
          colors: [ 
            {
              color: "#144879",
              name: "Fundo"
            },
            {
              color: "#F0F0F0",
              name: "Fonte"
            }
          ]
        },
      ]
    },
    {
      title: "Formulário",
      component: [
        {
          name: "Campo",
          colors: [ 
            {
              color: "#0C2B48",
              name: "Fundo"
            },
            {
              color: "#0C2B48",
              name: "Fonte"
            },
          ]
        },
        {
          name: "Botões",
          colors: [ 
            {
              color: "#144879",
              name: "Borda"
            },
            {
              color: "#F0F0F0",
              name: "Fonte"
            },
          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

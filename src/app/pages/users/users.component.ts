import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public dataSource: Array<any> = [
    {
      id: 1,
      name: "Heloisa",
      email: "santosnascimentoheloisa@gmail.com",
      lastAcess: "Hoje",
    },
    {
      id: 2,
      name: "Guilherme",
      email: "guilherme.monteiro.espim@gmail.com",
      lastAcess: "Hoje",
    },
    {
      id: 3,
      name: "Reafael",
      email: "rafael.espim@gmail.com",
      lastAcess: "Hoje",
    },
    {
      id: 4,
      name: "Rafael",
      email: "nasciementoespimpedro@gmail.com",
      lastAcess: "Hoje",
    },
    {
      id: 5,
      name: "Maria Júlia",
      email: "nascimentoespimmaju@gmail.com",
      lastAcess: "Hoje",
    },
    {
      id: 6,
      name: "Felipe",
      email: "nasicmentoespimfelipe@gmail.com",
      lastAcess: "Hoje",
    },
  ];

  public displayedColumns: Array<any> = [
    {
      type: "id",
      name: "Id",
    },
    {
      type: "name",
      name: "Nome"
    },
    {
      type: "email",
      name: "Email"
    },
    {
      type: "lastAcess",
      name: "Último acesso"
    },
    {
      type: "actions",
      name: "Ações"
    }
  ];

  constructor() { }

  ngOnInit(): void {
   this.formatData()
  }


  private formatData(): void {
    for (let item of this.dataSource) {
      item.actions = ['delete', 'edit'];
    }
  }

  public delete(event: any): void {
    // delete from array
  }

  public edit(event: any): void {
    // edit from array
  }

}

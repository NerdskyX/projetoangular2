import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContatoService } from '../contato.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({

  selector: 'app-edit-contato',

  templateUrl: './edit-contato.component.html',

  styleUrls: ['./edit-contato.component.css']

})

export class EditContatoComponent implements OnInit{

  contatoForm: FormGroup;



  constructor(

    private contatoService: ContatoService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.contatoForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      estoque: new FormControl('', Validators.required),

      genero: new FormControl('', Validators.required)

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.contatoService.getContatoById(id).valueChanges().subscribe(data => {

        this.contatoForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.contatoService.updateContato(this.contatoForm.value);

    this.toastr.success(

      this.contatoForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-contato']);

  }

  goBack(){

    this.location.back();

  }



  get nome(){

    return this.contatoForm.get('nome');

  }



  get estoque(){

    return this.contatoForm.get('estoque');

  }



  get genero(){

    return this.contatoForm.get('genero');

  }

}

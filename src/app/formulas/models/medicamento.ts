export class Medicamento {
  nombreMedicina:string;
  tomarCada:number;
  observacion:string;
  dosis:string;
  fechaInicio:string;
  horaInicio:string;
  /**
   *
   */
  constructor(nombreMedicina:string, tomarCada:number, observacion:string, dosis:string, fechaInicio:string, horaInicio:string) {
    this.nombreMedicina=nombreMedicina
    this.tomarCada=tomarCada
    this.observacion=observacion
    this.dosis=dosis
    this.fechaInicio=fechaInicio
    this.horaInicio=horaInicio
  }
}



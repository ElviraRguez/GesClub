import {Miembro} from './miembro';

export class Incidencia{

    public asunto: String;
    public fechaInicio: Date;
    public fechaFin: Date;
    public detalle: String;
    public miembro: Miembro;

    private constructor(d:any) {
        this.asunto = d.asunto;
        this.fechaInicio = d.fechaInicio;
        this.fechaFin = d.fechaFin;
        this.detalle = d.detalle;
        this.miembro = d.miembro;

    }

}
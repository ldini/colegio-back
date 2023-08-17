import { Clase } from "src/clases/entities/clase.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombreYapellido:string;



    constructor(nombre:string){
        this.nombreYapellido = nombre;
    }

    public getIdEstudiante():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombreYapellido;
    }

    public setNombre(nombre:string){
        this.nombreYapellido = nombre;
    }

    @ManyToMany(()=>Clase,clase => clase.estudiantes)
    clases: Clase[];
}

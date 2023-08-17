import { Escuela } from "src/escuelas/entities/escuela.entity";
import { DomicilioProfesor } from "src/profesores/entities/domicilio_profesor.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ciudad')
export class Ciudad {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @OneToOne(()=>Escuela)
    @JoinColumn({})
    public escuela:Escuela;

    @OneToMany(()=>DomicilioProfesor,domicilios=>domicilios.ciudad)
    domicilios:DomicilioProfesor[];




    constructor(nombre:string){
        this.nombre = nombre;
    }

    public getIdCiudad():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }



}

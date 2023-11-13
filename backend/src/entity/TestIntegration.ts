import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TestIntegration {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Fullname: string

    @Column()
    Email: string

    @Column()
    PhoneNumber: string

    @Column()
    Address: string

}

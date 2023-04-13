import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("sales")
  class Sale {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      total!: number;
  
    @Column()
      description!: string;
  
    @Column()
      observarions!: string;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Sale };
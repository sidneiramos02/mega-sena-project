import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mega_sena_sorteios')
export class MegaSenaSorteio {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  numero: number = 0;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }) // Ajuste aqui
  data_sorteio: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null = null;

  constructor() {
    this.data_sorteio = new Date(); // Define um valor padrão para o construtor
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

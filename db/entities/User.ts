import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ schema: 'sub', name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string
  
  @Column()
  lastname: string
  
  @Column()
  firstname: string

  @Column()
  password: string

  @Column({ nullable: true })
  monthlySubscriptionStatus?: string

  @Column({ nullable: true })
  customerId?: string
}

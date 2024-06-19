import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Status, StatusEnum } from "../common/index.js";

class UserModel extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id!: number;

  @Column({ allowNull: false, type: DataType.STRING(255)})
  email!: string;

  @Column({ allowNull: false, type: DataType.ENUM(...StatusEnum), defaultValue: 'ACTIVE' })
  status!: Status;

  @Column createdBy!: number;

  @Column updatedBy!: number;

}

@Table({ tableName: 'Users'      })
export class User extends UserModel {
}

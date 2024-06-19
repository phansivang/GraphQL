import { Column, DataType, Model, Table } from 'sequelize-typescript';

class UserProfileModel extends Model {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  id!: number;

  @Column({ allowNull: false, type: DataType.STRING(50) })
  userId!: string;

  @Column({ allowNull: false, type: DataType.STRING(100) })
  firstName!: string;

  @Column({ allowNull: false, type: DataType.STRING(100) })
  lastName!: string;
}

@Table({ tableName: 'UserProfiles' })
export class UserProfile extends UserProfileModel {
}

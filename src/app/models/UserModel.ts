import { DataTypes, Model } from "sequelize";
import sequelize from "../../services/DATABASE";
import bcrypt from "bcrypt";

interface IUser extends Model {
  id: string;
  email: string;
  password: string;
  userRank: string;
  updatedAt: Date;
  createdAt: Date;
}

const User = sequelize.define<IUser>(
  "Users",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    userRank: {
      type: DataTypes.STRING, // master || comum
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
  },
  {
    tableName: "users",
  }
);

User.beforeCreate(async (user, options) => {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
});

export default User;

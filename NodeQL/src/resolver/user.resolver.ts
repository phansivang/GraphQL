import { UserProfile } from '../model/user-profile.model.js';
import { User } from '../model/user.model.js';

export const resolvers = {
  Query: {
    user: async (_: never, args: { id: string }) => await User.findOne({ where: { id: args.id } }),
    users: async (_: never, { offset, limit }: { id: string; offset: number; limit: number }) => {
      const { rows: data, count: total } = await User.findAndCountAll({ limit, offset, raw: true });

      return { data, total };
    },

    userProfile: async (_: never, args: { id: string }) => await UserProfile.findOne({ where: { id: args.id } }),

    userProfiles: async (_: never, { offset, limit }: { id: string; offset: number; limit: number }) => {
      const { rows: data, count: total } = await UserProfile.findAndCountAll({ limit, offset, raw: true });

      return { data, total };
    }
  },

  User: {
    profile: async (user: User) => await UserProfile.findOne({ where: { userId: user.id } })
  },

  Mutation: {
    create: async (_: never, userBody: { user: User & { profile: UserProfile } }) => {
      const { firstName, lastName } = userBody.user.profile;

      const user = await User.create({ ...userBody.user });
      await UserProfile.create({ userId: user.id, firstName, lastName });

      return user;
    },

    update: async (_: never, userBody: { user: User & { profile: UserProfile } }) => {
      const { firstName, lastName } = userBody.user.profile;
      const { id, email } = userBody.user;

      await User.update({ email }, { where: { id } });
      await UserProfile.update({ firstName, lastName }, { where: { userId: id } });

      return { message: 'OK' };
    },

    delete: async (_: never, userBody: { user: { id: string; status: string } }) => {
      const { id, status } = userBody.user;

      await User.update({ status }, { where: { id } });

      return { message: 'OK' };
    }
  }
};

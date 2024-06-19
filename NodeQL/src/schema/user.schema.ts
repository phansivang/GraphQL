export const UserSchema = `
  #graphql
  
  # SCHEMA TYPE OF THE TYPE WE DEFINE THE FIELD THAT WE GOING TO QUERY
  
  type User {
    id: ID!
    email: String!
    profile: UserProfile
  }
  
  type UserProfile {
    id: ID!
    userId: ID!
    firstName: String!
    lastName: String!
  }
  
  # RESPONSE TYPE IS FOR HANDLING WHAT TYPE OF FORMAT WE WANT TO RETURN

  type UserResponses {
      data: [User]!
      total: Int
  }

  type UserProfileResponses {
      data: [UserProfile]!
      total: Int
  }
  
  type CommonResponse {
      message: String
  }
   
  # QUERY TYPE IS THE BASE WHERE WE GOING TO FOLLOW THE FORMAT AND THE PARAMETER THAT NEED TO FILTER
  
  type Query {
    user(id: ID!): User
    users(limit: Int, offset: Int): UserResponses
    userProfile(id: ID!): UserProfile
    userProfiles(limit: Int, offset: Int): UserProfileResponses
  }
  
  # MUTATION TYPE IS FOR HANDLING CRUD
  
  type Mutation {
      create(user: UserBody): User
      update(user: UserBody): CommonResponse
      delete(user: UserDeleteBody): CommonResponse
  }
  
  # INPUT TYPE IS FOR HANDLING WORK AS BODY TYPE WHEN WE INSERT OR UPDATE
  
  input UserBody {
      id: String
      email: String!
      status: String
      profile: UserProfileBody
  }

  input UserDeleteBody {
      id: String!
      status: String!
  }

  input UserProfileBody {
      firstName: String!
      lastName: String!
  }
  
`;
